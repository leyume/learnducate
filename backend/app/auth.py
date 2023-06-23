import json
from fastapi import FastAPI, Header, Request, Depends, Path, HTTPException, status
from fastapi.security import HTTPBearer
from sqlalchemy.orm import Session
from models.index import get_db, Student, Tutor
from config import pyrebase, fb_auth

security = HTTPBearer()


# async def auth(request: Request):
async def auth(authorization: str = Depends(security), db: Session = Depends(get_db)):
    try:
        token = authorization.credentials
        user = await get_user(token, db)
        return user
    except Exception as e:
        print(e)
        raise HTTPException(status_code=401, detail="Invalid Authorisation")



async def get_user(token: str, db: Session = Depends(get_db)):

    try:
        decoded_token = fb_auth.verify_id_token(token)
        # return decoded_token
        user = None
        if decoded_token["role"] == "student":
            user = (
                db.query(Student)
                .filter(Student.email == decoded_token["email"])
                .first()
            )
        elif decoded_token["role"] == "tutor":
            user = db.query(Tutor).filter(Tutor.email == decoded_token["email"]).first()
        

        if user is None:
            # create user here
            # raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=decoded_token['role'].title() + " with the email doesn't exist")
            print("Create user here......")

        user.role = decoded_token["role"]
        return user

    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))