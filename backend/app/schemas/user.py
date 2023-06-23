from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
from .student import Student

class User(Student): #serializer
    # id: Optional[int] = None
    role: str = 'student'
    password: str = 'learnd'

    class Config:
        orm_mode=True

class UserFull(Student):
    id: Optional[int] = None
    role: str = 'student'
    date: Optional[datetime] = None
    modified: Optional[datetime] = None

class UserUpdate(BaseModel):
    firstname: Optional[str] = None
    lastname: Optional[str] = None
    phone: Optional[str] = None

