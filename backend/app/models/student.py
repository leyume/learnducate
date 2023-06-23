from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class Student(Base):
    __tablename__='students'
    id=Column(Integer,primary_key=True)
    email=Column(String(255),nullable=False,unique=True)
    firstname=Column(String(150))
    lastname=Column(String(150))
    phone=Column(String(50))
    date = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    modified = Column(TIMESTAMP(timezone=True), default=None, onupdate=func.now())
    enrolments = relationship("Enrolment", back_populates="student")
    exams = relationship("Exam", back_populates="student")
    courses = relationship('Course', secondary='enrolments', back_populates='students')



    def __repr__(self):
        return f"<Student firstname={self.firstname} email={self.email}>"
