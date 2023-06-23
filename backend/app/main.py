import os, time, importlib
from fastapi import FastAPI, Header, Request, Depends, Path, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import Annotated, Union #Optional,List
from auth import auth

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def main(auth = Depends(auth)):
    return 'Hello Learnducates...'

routes_folder = os.path.abspath("routes")

# Iterate over the files in the routes folder
for filename in os.listdir(routes_folder):
    if filename.endswith(".py"):
        module_name = filename[:-3]  # Remove the ".py" extension
        module_path = f"routes.{module_name}"  # Construct the module path
        module = importlib.import_module(module_path)  # Import the module dynamically
        router = module.router  # Get the router object from the module
        route = '/' + module_name if module_name != 'index' else '' # Make content of index default to root
        app.include_router(router, prefix=f"{route}")  # Include the router in the FastAPI app

