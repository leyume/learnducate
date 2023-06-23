from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

from models.index import get_db, Student, Tutor #StudentCourse
from schemas.user import UserFull as User, UserUpdate
from schemas.student import StudentCourse
from auth import auth

router = APIRouter()


@router.get("", response_model=User, status_code=status.HTTP_200_OK)
def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
    return auth
    


@router.put("")
def update_user(user:UserUpdate, db: Session = Depends(get_db), auth=Depends(auth)):
    if user.phone == 'string': 
        user.phone = None

    if auth.role != 'student' and auth.role != 'tutor':
        raise HTTPException(status_code=422, detail="Role must be either student or tutor")
    
    try:
        user_dict = user.dict()
        db_user = None

        if auth.role == 'student':
            db_user = db.query(Student).filter(Student.id==auth.id)

        if auth.role == 'tutor':
            db_user = db.query(Tutor).filter(Tutor.id==auth.id)

        if db_user is None:
            raise HTTPException(status_code=403, detail="User does not exist.")

        db_user.update(user_dict)
        db.commit()
        return {"message": "Profile successfully updated"}
    except Exception as e:
        print('Error updating profile: ', str(e))
        raise HTTPException(status_code=401, detail=str(e))



@router.get("/courses", response_model=StudentCourse, status_code=status.HTTP_200_OK)
def get_user_courses(db: Session = Depends(get_db), auth=Depends(auth)):
    db_user = None
    
    # Get courses that student enrolled for
    if auth.role == "student":
        db_user = db.query(Student).filter(Student.id==auth.id).first()
    
    # Get courses that tutor created
    if auth.role == "tutor":
        db_user = db.query(Tutor).filter(Tutor.id==auth.id).first()

    return db_user