from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
# from .student import Student


class CoursePost(BaseModel):  # serializer
    # id: Optional[int] = None
    # tutor_id: Optional[int] = Field(..., description="", exclude=True)
    tutor_id: Optional[int] = None
    name: str
    content: str
    image: Optional[str] = None
    # date: Optional[datetime] = None
    # modified: Optional[datetime] = None

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "name": "React Course",
                "content": "React Content",
                "image": "",
            }
        }


class CoursePostResponse(CoursePost):
    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": 1,
                "tutor_id": 1,
                "name": "React Course",
                "content": "React Content",
                "image": "",
            }
        }


class Course(CoursePost):  # serializer
    id: Optional[int] = None


class Student(BaseModel): #serializer
    id:int
    email: str
    firstname: str
    lastname: str 
    phone: Optional[str] = None

class CourseStudent(Course): 
    students: List[Student]

# 
class Tutor(BaseModel):
    id: Optional[int] = None
    firstname: str
    lastname: str

    class Config:
        orm_mode = True

class CourseTutor(Course): 
    tutor: Tutor

#
#
class QuestionOption(BaseModel):
    id: Optional[int] = None
    option: str
    answer: str

    class Config:
        orm_mode = True

        
class Question(BaseModel):
    id: Optional[int] = None
    question: str
    options: List[QuestionOption]

    class Config:
        orm_mode = True

class CourseQuestion(Course): 
    tutor: Tutor
    questions: List[Question]
    