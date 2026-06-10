from fastapi import UploadFile
from app.lib import storage
from app.db.client import supabase
from app.models.document import Document
from datetime import datetime

class DocumentService:
    @staticmethod
    async def upload_document(file: UploadFile, project_id: str, user) -> Document:
        """
        Coordinates file upload to storage and metadata save to database.
        """
        # 1. Upload file to Supabase Storage
        file_url = storage.upload_file(file, file.filename)
        
        # 2. Prepare metadata for database
        user_id = user.get("id") if isinstance(user, dict) else getattr(user, "id", str(user))
        
        document_data = {
            "project_id": project_id,
            "file_name": file.filename,
            "file_url": file_url,
            "uploaded_by": user_id
        }
        
        # 3. Save metadata to 'documents' table
        response = supabase.table("documents").insert(document_data).execute()
        
        if not response.data:
            raise Exception("Failed to save document metadata")
            
        return Document(**response.data[0])

document_service = DocumentService()
