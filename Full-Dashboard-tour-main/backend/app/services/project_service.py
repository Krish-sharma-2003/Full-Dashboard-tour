from app.db.client import supabase
from app.models.project import ProjectCreate, Project
from typing import List

class ProjectService:
    @staticmethod
    async def create_project(project_in: ProjectCreate, user) -> Project:
        data = project_in.model_dump()
        data["created_by"] = user["id"] if isinstance(user, dict) else user.id

        response = supabase.table("projects").insert(data).execute()

        if not response.data:
            raise Exception("Failed to create project")

        return Project(**response.data[0])

    @staticmethod
    async def get_projects(org_id: str) -> List[Project]:
        response = supabase.table("projects").select("*").eq("organization_id", org_id).execute()
        return [Project(**p) for p in response.data]

    @staticmethod
    async def get_project(project_id: str) -> Project:
        response = supabase.table("projects").select("*").eq("id", project_id).single().execute()
        return Project(**response.data)

project_service = ProjectService()
