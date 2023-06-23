from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, DateTime, ForeignKey
from sqlalchemy.sql import func
from .database import Base
# from .student import Student


class Enrolment(Base):
    __tablename__ = "enrolments"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('students.id'))
    tutor_id = Column(Integer, ForeignKey('tutors.id'))
    course_id = Column(Integer, ForeignKey('courses.id'))
    result = Column(Integer)
    exam_date = Column(DateTime)
    date = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    student = relationship("Student", back_populates="enrolments")
    course = relationship("Course", back_populates="enrolments")

    def __repr__(self):
        return f"<Enrolment id={self.id}>"
