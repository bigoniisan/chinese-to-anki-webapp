# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.translation import router as translation_router  
from app.api.anki_export import router as anki_router      

app = FastAPI()

# Allow frontend requests (Adjust as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; restrict this in production
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

app.include_router(translation_router, prefix="/api")
app.include_router(anki_router, prefix="/anki")

@app.get("/")
async def root():
    return {"message": "API is running"}
