from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, DateTime, ForeignKey
from sqlalchemy.sql import func
from .database import Base
# from .student import Student


class Exam(Base):
    __tablename__ = "exams"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('students.id'))
    course_id = Column(Integer, ForeignKey('courses.id'))
    question_id = Column(Integer, ForeignKey('questions.id'))
    question_option_id = Column(Integer, ForeignKey('question_options.id'))
    correct = Column(Integer)
    student = relationship("Student", back_populates="exams")
    course = relationship("Course", back_populates="exams")

    def __repr__(self):
        return f"<Exam id={self.id}>"
