from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class ExamPost(BaseModel):  # serializer
    student_id: Optional[int] = None
    course_id: Optional[int] = None
    question_id: int
    question_option_id: int
    correct: Optional[int] = 0

    class Config:
        orm_mode = True

# class Course(CoursePost):  # serializer
#     id: Optional[int] = None
