from fastapi import Depends, HTTPException, Header
from app.db.client import supabase

async def get_current_user():
    return {"id": "test_user"}

def require_role(*allowed_roles: str):
    async def check(current_user = Depends(get_current_user)):
        # Assuming role is in user_metadata as per README
        user_role = current_user.user_metadata.get("role")
        if user_role not in allowed_roles:
            raise HTTPException(status_code=403, detail="Insufficient permissions")
        return current_user
    return check
