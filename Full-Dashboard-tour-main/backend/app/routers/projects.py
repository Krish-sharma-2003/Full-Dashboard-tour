from fastapi import APIRouter, Depends, HTTPException
from app.models.project import ProjectCreate, Project
from app.services.project_service import project_service
from app.dependencies import get_current_user
from typing import List

router = APIRouter(prefix="/projects", tags=["projects"])

@router.post("/", response_model=Project)
async def create_project(project_in: ProjectCreate, current_user = Depends(get_current_user)):
    try:
        return await project_service.create_project(project_in, current_user)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/", response_model=List[Project])
async def list_projects(org_id: str, current_user = Depends(get_current_user)):
    try:
        return await project_service.get_projects(org_id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
