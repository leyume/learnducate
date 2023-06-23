from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class Question(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True)
    course_id = Column(Integer, ForeignKey('courses.id'))
    question = Column(Text)
    course = relationship("Course", back_populates="questions")
    options = relationship("QuestionOption", back_populates="question")

    # course = relationship("Course", back_populates="questions")

    # options = relationship('QuestionOption', secondary='enrolments', back_populates='courses')
    # tutor = relationship("Tutor", back_populates="courses")
    # enrolments = relationship('Enrolment', back_populates='course')
    # students = relationship('Student', secondary='enrolments', back_populates='courses')
    # tutor = relationship("Tutor", back_populates="courses")

    def __repr__(self):
        return f"<Question id={self.id}>"

