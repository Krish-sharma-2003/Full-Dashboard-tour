from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional, List

class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None
    region: str # e.g., "FDA (USA)", "EU EMA"
    organization_id: str

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: str
    status: str = "IN_PROGRESS"
    created_at: datetime
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
