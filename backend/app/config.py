import pyrebase

import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth as fb_auth

# pyrebase - only here for logging in because firebase-admin doesn't have login
firebaseConfig = {
    "apiKey": "AIzaSyDZ4ovsNRR9XA0myzhPawZIY5Kwb42CA1w",
    "authDomain": "learnducates.firebaseapp.com",
    "projectId": "learnducates",
    "storageBucket": "learnducates.appspot.com",
    "messagingSenderId": "335732251297",
    "appId": "1:335732251297:web:aa6c6d79cbcffd72cfaee0",
    "databaseURL": ""
}

pyrebase = pyrebase.initialize_app(firebaseConfig)

# firebase-admin
cred = credentials.Certificate("credentials/firebase.json")
firebase_admin.initialize_app(cred)