from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True)
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    name = Column(String(150))
    content = Column(Text)
    image = Column(Text)
    date = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    modified = Column(TIMESTAMP(timezone=True), default=None, onupdate=func.now())
    enrolments = relationship('Enrolment', back_populates='course')
    exams = relationship('Exam', back_populates='course')
    students = relationship('Student', secondary='enrolments', back_populates='courses')
    tutor = relationship("Tutor", back_populates="courses")
    questions = relationship("Question", back_populates="course")

    def __repr__(self):
        return f"<Course id={self.id}>"

