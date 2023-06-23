# from . import schemas, models
from sqlalchemy.orm import Session, joinedload
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List
from datetime import date

from models.index import get_db, Student, Enrolment, Course, Exam
from schemas.student import Student as SStudent
from schemas.enrolment import Enrolment as SEnrolment
from schemas.exam import ExamPost
from auth import auth


router = APIRouter()


@router.get("", response_model=List[SStudent], status_code=200)
def get_students(db: Session = Depends(get_db)):
    students = db.query(Student).all()
    return students


@router.get("/{id}", response_model=SStudent, status_code=status.HTTP_200_OK)
def get_student(id: int, db: Session = Depends(get_db)):
    student = db.query(Student).filter(Student.id == id).first()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student with ID doesn't exist",
        )
    return student


@router.post(
    "/courses/{course_id}/enrol",
    status_code=status.HTTP_201_CREATED,
)
def student_course_apply(
    course_id: int, auth=Depends(auth), db: Session = Depends(get_db)
):
    if auth.role != "student":
        raise HTTPException(
            status_code=403, detail="You have to be a student to apply for course"
        )
    student_id = auth.id

    # check if course exist
    db_course = db.query(Course).filter(Course.id == course_id).first()
    
    if db_course is None:
        raise HTTPException(status_code=404, detail="Course with id doesn't exist")
    
    # check if already enrolled
    db_enrol = db.query(Enrolment).filter(Enrolment.student_id == student_id, Enrolment.course_id == course_id).first()
    
    if db_enrol is not None:
        raise HTTPException(status_code=400, detail="You have already enrolled for this course")

    new_enrol = Enrolment(
        student_id=student_id,
        course_id=course_id,
        tutor_id=db_course.tutor_id,
    )

    db.add(new_enrol)
    db.commit()

    return {"message" : "You have successfully enrolled for this course"}




@router.post(
    "/courses/{course_id}/exam",
    status_code=status.HTTP_201_CREATED,
)
def student_course_exam(
    exam: List[ExamPost], course_id: int, auth=Depends(auth), db: Session = Depends(get_db)
):

    if auth.role != "student":
        raise HTTPException(status_code=403, detail="You have to be a student to take an exam")
    student_id = auth.id


    # check if enrolled
    db_enrol = db.query(Enrolment).filter(Enrolment.student_id == student_id, Enrolment.course_id == course_id)
    
    if db_enrol is None:
        raise HTTPException(status_code=400, detail="You have not enrolled for this course yet. You need to enrol first.")

    # check if exam has been previously taken
    db_exam = db.query(Exam).filter(Exam.student_id==auth.id, Exam.course_id==course_id).first()
    if db_exam is not None:
        raise HTTPException(status_code=403, detail="You have already taken this exam. Your result is " + result + "%")


    # get course with questions
    course = db.query(Course).filter(Course.id == course_id).options(joinedload(Course.questions)).first()

    total_questions = len(course.questions)
    count_correct = 0

    for question in course.questions:
        for ex in exam:
            ex.student_id = auth.id
            ex.course_id = course_id
            # ex.correct = 0
            if question.id == ex.question_id:
                for opt in question.options:
                    print('I AM HEREEEEE')
                    print('------------------')
                    print(opt.id)
                    print(ex.question_option_id)
                    print('ANSER', opt.answer)

                    if opt.id == ex.question_option_id and opt.answer == 1:
                        ex.correct = 1
                        count_correct += 1
                        break


    print('Hello___ ', exam )
    print('COUNT  ', count_correct )
    print('TOTAL  ', total_questions )



    exam_dict = []
    for ex in exam:
        exam_dict.append(Exam(**ex.dict()))


    db.add_all(exam_dict)
    db.commit()

    result = (count_correct * 100) / total_questions

    # update enrolment
    up_enrol = {
        "exam_date": date.today(),
        "result": result,
    }

    db_enrol.update(up_enrol)
    db.commit()

    return {"message" : "You have completed for the exam"}


# @router.post('/', response_model=SStudent, status_code=status.HTTP_201_CREATED)
# def create_student(student:SStudent, db: Session = Depends(get_db)):
#     db_student = db.query(Student).filter(Student.email==student.email).first()

#     if db_student is not None:
#         raise HTTPException(status_code=400,detail="Student with email already exists")

#     new_student=Student(
#         email=student.email,
#         firstname=student.firstname,
#         lastname=student.lastname,
#         phone=student.phone,
#     )

#     db.add(new_student)
#     db.commit()

#     return new_student


# @router.put('/{id}',response_model=SStudent,status_code=status.HTTP_200_OK)
# def update_student(id:int, student:SStudent, db: Session = Depends(get_db)):
#     db_student=db.query(Student).filter(Student.id==id).first()
#     # db_student.email=student.email
#     # db_student.firstname=student.firstname
#     # db_student.lastname=student.lastname
#     db_student.phone = student.phone

#     db.commit()

#     return db_student
