from fastapi import FastAPI
from app.routers import projects, documents
from fastapi.middleware.cors import CORSMiddleware   #new line add
app = FastAPI()
app.add_middleware(     #new line add
    CORSMiddleware,
    allow_origins=["*"],  # dev ke liye ok
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(projects.router)
app.include_router(documents.router)

@app.get("/")
def root():
    return {"msg": "API working"}