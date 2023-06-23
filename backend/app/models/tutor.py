from sqlalchemy.sql.expression import null
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base


class Tutor(Base):
    __tablename__='tutors'
    id=Column(Integer,primary_key=True)
    email=Column(String(255),nullable=False,unique=True)
    firstname=Column(String(150))
    lastname=Column(String(150))
    phone=Column(String(50))
    date = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    modified = Column(TIMESTAMP(timezone=True), default=None, onupdate=func.now())
    courses = relationship("Course", back_populates="tutor")


    def __repr__(self):
        return f"<Tutor firstname={self.firstname} email={self.email}>"