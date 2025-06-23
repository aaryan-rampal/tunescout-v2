from typing import Dict, List

from fastapi import APIRouter, Depends, Header

router = APIRouter(
    prefix="/spotify",
    tags=["spotify"],
    dependencies=[Depends(get_spotify_token)],
    responses={404: {"description": "Not found"}},
)


@router.post("/get_playlists", tags=["spotify"], response_model=List[Dict])
async def get_playlists(authorization: str = Header(...)):  # noqa: D103
    return await spotify_controller.get_playlists(authorization)


@router.post("/create_playlist", tags=["spotify"])
async def create_playlist(request: CreatePlaylistRequest):
    return await spotify_controller.create_playlist(request)
