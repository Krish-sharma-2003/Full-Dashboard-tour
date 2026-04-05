from fastapi import FastAPI
from app.routers import projects

app = FastAPI()

app.include_router(projects.router)

@app.get("/")
def root():
    return {"msg": "API working"}