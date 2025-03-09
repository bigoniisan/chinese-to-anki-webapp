# API endpoint for generating Anki decks.

from fastapi import APIRouter

router = APIRouter()

@router.get("/anki")
async def export_anki():
    return {"message": "Anki Export API"}
