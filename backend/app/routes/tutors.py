from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional,List

from models.database import get_db
from models.tutor import Tutor
from schemas.tutor import Tutor as STutor, TutorCourse

router = APIRouter()

# @router.get('',response_model=List[STutor],status_code=200)
@router.get('',response_model=List[TutorCourse],status_code=200)
def get_tutors(db: Session = Depends(get_db)):
    tutors=db.query(Tutor).all()
    return tutors


@router.get('/{id}',response_model=STutor,status_code=status.HTTP_200_OK)
def get_tutor(id:int, db: Session = Depends(get_db)):
    tutor = db.query(Tutor).filter(Tutor.id==id).first()
    if tutor is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Tutor with ID doesn't exist")
    return tutor
