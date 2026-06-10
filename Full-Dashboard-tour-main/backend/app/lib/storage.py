import os
import uuid
from fastapi import UploadFile
from app.db.client import supabase
from app.config import settings

def upload_file(file: UploadFile, filename: str) -> str:
    """
    Uploads a file to Supabase Storage bucket 'documents' with a unique filename.
    Returns the public URL of the uploaded file.
    """
    try:
        # Generate a unique filename using uuid
        unique_name = f"{uuid.uuid4()}_{filename}"
        
        # Read file content
        file_content = file.file.read()
        
        print(f"Uploading file: {filename} as {unique_name}")
        
        # Upload to bucket 'documents'
        response = supabase.storage.from_("documents").upload(
            path=unique_name,
            file=file_content,
            file_options={"upsert": "true"}
        )
        
        # Get public URL
        public_url = supabase.storage.from_("documents").get_public_url(unique_name)
        
        print(f"Successfully uploaded {filename}. Public URL: {public_url}")
        return public_url
        
    except Exception as e:
        error_msg = f"Error uploading file {filename} to Supabase: {str(e)}"
        print(error_msg)
        raise Exception(error_msg)
