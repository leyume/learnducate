from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class QuestionOption(Base):
    __tablename__ = "question_options"
    id = Column(Integer, primary_key=True)
    course_id = Column(Integer, ForeignKey('courses.id'))
    question_id = Column(Integer, ForeignKey('questions.id'))
    option = Column(Text)
    answer = Column(Integer)
    question = relationship("Question", back_populates="options")
    # course = relationship("Course", back_populates="questions")
    

    def __repr__(self):
        return f"<QuestionOption id={self.id}>"

