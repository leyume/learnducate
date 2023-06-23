# from . import schemas, models
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

from models.index import get_db, Course
from schemas.course import Course as SCourse, CoursePost, CoursePostResponse, CourseTutor, CourseQuestion
from auth import auth


router = APIRouter()


@router.get("", response_model=List[CourseTutor], status_code=200)
def get_courses(db: Session = Depends(get_db)):
    courses = db.query(Course).all()
    return courses


@router.get("/{id}", response_model=SCourse, status_code=status.HTTP_200_OK)
def get_course(id: int, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.id == id).first()
    if course is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course with ID doesn't exist",
        )
    return course



@router.get("/{id}/questions", response_model=CourseQuestion, status_code=status.HTTP_200_OK)
def get_course_questions(id: int, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.id == id).first()
    if course is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course with ID doesn't exist",
        )
    return course

    


@router.post("", response_model=CoursePostResponse, status_code=status.HTTP_201_CREATED)
# @router.post("", status_code=status.HTTP_201_CREATED)
def create_course(
    course: CoursePost, auth=Depends(auth), db: Session = Depends(get_db)
):
    # return auth
    if auth.role != "tutor":
        raise HTTPException(
            status_code=403, detail="You have to be a tutor to create a course"
        )

    course.tutor_id = auth.id
    db_course = db.query(Course).filter(Course.name == course.name).first()
    # return auth
    if db_course is not None:
        raise HTTPException(status_code=400, detail="Course with name already exists")

    new_course = Course(**course.dict())

    db.add(new_course)
    db.commit()

    return new_course


# @router.put('/{id}',response_model=SCourse,status_code=status.HTTP_200_OK)
# def update_course(id:int, course:SCourse, db: Session = Depends(get_db)):
#     db_course=db.query(Course).filter(Course.id==id).first()
#     # db_course.email=course.email
#     # db_course.firstname=course.firstname
#     # db_course.lastname=course.lastname
#     db_course.phone = course.phone

#     db.commit()

#     return db_course
