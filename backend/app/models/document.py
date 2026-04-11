from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional

class DocumentBase(BaseModel):
    project_id: str
    file_name: str
    file_url: str
    uploaded_by: str

class DocumentCreate(DocumentBase):
    pass

class Document(DocumentBase):
    id: str
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
