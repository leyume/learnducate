from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class Tutor(BaseModel):  # serializer
    id: Optional[int] = None
    email: str
    firstname: str
    lastname: str
    phone: Optional[str] = None
    # role: Optional[str] = None
    # date: Optional[datetime] = None
    # modified: Optional[datetime] = None

    class Config:
        orm_mode = True


class Course(BaseModel):
    id: int
    name: str
    content: str
    image: Optional[str] = None

    class Config:
        orm_mode = True

class TutorCourse(Tutor): 
    courses: List[Course]