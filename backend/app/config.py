from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    APP_NAME: str = "AI-eCTD Platform API"
    DEBUG: bool = True
    
    # Supabase
    SUPABASE_URL: str
    SUPABASE_SERVICE_ROLE_KEY: str
    
    # Anthropic
    ANTHROPIC_API_KEY: str
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()

# Debug print to confirm loading (Will only show in logs)
if settings.DEBUG:
    print(f"--- Environment Config Loaded ---")
    print(f"APP_NAME: {settings.APP_NAME}")
    print(f"SUPABASE_URL: {settings.SUPABASE_URL}")
    print(f"ANTHROPIC_API_KEY: {'Loaded' if settings.ANTHROPIC_API_KEY else 'MISSING'}")
    print(f"---------------------------------")
