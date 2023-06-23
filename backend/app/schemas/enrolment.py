from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class Enrolment(BaseModel):  # serializer
    # id: Optional[int] = None
    student_id: int
    tutor_id: int
    course_id: int
    result: Optional[int] = None
    exam_date: Optional[datetime] = None

    class Config:
        orm_mode = True

# class Course(CoursePost):  # serializer
#     id: Optional[int] = None
