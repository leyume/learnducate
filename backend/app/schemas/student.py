from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
from .enrolment import Enrolment
from .tutor import Tutor
# from .course import Course

class Student(BaseModel): #serializer
    id:Optional[int] = None
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None
    # date: Optional[datetime] = None
    # modified: Optional[datetime] = None

    class Config:
        orm_mode=True

class Enrol(BaseModel):
    course_id: int
    result: Optional[int] = None
    exam_date: Optional[datetime] = None
    class Config:
        orm_mode = True


class Course(BaseModel):
    id: int
    name: str
    content: str
    image: Optional[str] = None
    tutor: Tutor

    class Config:
        orm_mode = True

class StudentCourse(Student): 
    role: str
    courses: List[Course]
    enrolments: Optional[List[Enrol]] = None
