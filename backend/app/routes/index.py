import json
from sqlalchemy.orm import Session
from fastapi import HTTPException, status, APIRouter, Depends, Request, Form
from typing import Optional, List
from pydantic import BaseModel

from models.index import get_db, Student, Tutor
from schemas.user import User
from config import pyrebase, fb_auth
from auth import auth, get_user

from schemas.student import StudentCourse

router = APIRouter()


class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login" )
async def login(email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    try:
        login = pyrebase.auth().sign_in_with_email_and_password(email, password)
        user = await get_user(login['idToken'], db)
        # print('Successfully Logged In', login['idToken'])
        print('Successfully Logged In')
        user.token = login['idToken']
        user.refresh_token = login['refreshToken']
        return user

    except Exception as e:
        err =  str(e)
        message = err
        code = 401

        index = err.find("{")
        if index != -1:
            start_index = err.index("{")
            json_str = err[start_index:]

            error_data = json.loads(json_str)
            code = error_data["error"]["code"]
            message = error_data["error"]["message"]
             # errors = error_data["error"]["errors"]

        raise HTTPException(status_code=code, detail=message)


def create_user(user: User, db: Session = Depends(get_db)):
    user_dict = user.dict(exclude={"role", "password"})
    db_user = None

    if user.role == 'student':
        db_user = db.query(Student).filter(Student.email==user.email).first()
        new_user = Student(**user_dict)

    if user.role == 'tutor':
        db_user = db.query(Tutor).filter(Tutor.email==user.email).first()
        new_user = Tutor(**user_dict)
    
    if db_user is None:
        db.add(new_user)
        db.commit()
        return {"message": user.role.title() + " successfully created"}
    
    raise HTTPException(status_code=403, detail=user.role.title() + " already registered.")


@router.post("/register")
def register(user:User, db: Session = Depends(get_db)):

    if user.role != 'student' and user.role != 'tutor':
        raise HTTPException(status_code=422, detail="Role must be either student or tutor")
    
    if user.phone == 'string': 
        user.phone = None 

    display_name = user.firstname + " " + user.lastname

    try:
        fb_user = fb_auth.create_user(email=user.email, password=user.password, display_name=display_name)
        fb_auth.set_custom_user_claims(fb_user._data['localId'], {'role': user.role})
        
        create_user(user, db)
        # fb_user
        return {"message": user.role.title() + " successfully created"}
    except Exception as e:
        if 'EMAIL_EXISTS' in str(e):
            return create_user(user, db)
        else:
            print('Error creating user: ', str(e))
            raise HTTPException(status_code=401, detail=str(e))

    my_header = request.headers.get('User-Agent')
    # auth_header = request.headers.get('Authorization')
    # if auth_header == None:
    #     return [{"User-Agent": my_header}]
    return [{"User-Agent": my_header}, {"Authorization" : auth}]