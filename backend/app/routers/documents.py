# from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
# from app.services.document_service import document_service
# from app.dependencies import get_current_user
# from app.models.document import Document

# router = APIRouter(prefix="/documents", tags=["documents"])

# @router.post("/upload", response_model=Document)
# async def upload_document(
#     file: UploadFile = File(...),
#     project_id: str = Form(...),
#     current_user: dict = Depends(get_current_user)
# ):
#     """
#     Endpoint to upload a document and save its metadata.
#     """
#     try:
#         document = await document_service.upload_document(
#             file=file,
#             project_id=project_id,
#             user=current_user
#         )
#         return document
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")
from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from app.services.document_service import document_service
from app.dependencies import get_current_user
from app.models.document import Document
from app.lib.storage import supabase

router = APIRouter(prefix="/documents", tags=["documents"])


# 🔥 UPLOAD DOCUMENT
@router.post("/upload", response_model=Document)
async def upload_document(
    file: UploadFile = File(...),
    project_id: str = Form(...),
    current_user: dict = Depends(get_current_user)
):
    """
    Endpoint to upload a document and save its metadata.
    """
    try:
        document = await document_service.upload_document(
            file=file,
            project_id=project_id,
            user=current_user
        )
        return document
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")


# 🔥 GET DOCUMENTS (NEW API)
@router.get("/{project_id}")
def get_documents(
    project_id: str,
    current_user: dict = Depends(get_current_user)
):
    """
    Get all documents for a specific project
    """
    try:
        response = (
            supabase.table("documents")
            .select("*")
            .eq("project_id", project_id)
            .execute()
        )

        return response.data

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch documents: {str(e)}"
        )