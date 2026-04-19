from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
import smtplib
from email.mime.text import MIMEText
import threading

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # we will secure later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ MongoDB
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["portfolio_db"]
collection = db["contacts"]

# ✅ Email Config (SET IN RENDER)
EMAIL = os.getenv("EMAIL")
APP_PASSWORD = os.getenv("APP_PASSWORD")

# Data model
class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}

# 🔥 SEND EMAIL FUNCTION
def send_email(data: Contact):
    msg = MIMEText(
        f"New Contact Message\n\n"
        f"Name: {data.name}\n"
        f"Email: {data.email}\n\n"
        f"Message:\n{data.message}"
    )

    msg["Subject"] = "New Portfolio Contact 🚀"
    msg["From"] = EMAIL
    msg["To"] = EMAIL

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL, APP_PASSWORD)
        server.send_message(msg)

@app.post("/contact")
def submit_contact(data: Contact):
    try:
        # Save to DB immediately
        collection.insert_one(data.dict())

        # 🔥 Send email in background thread (non-blocking)
        email_thread = threading.Thread(target=send_email, args=(data,))
        email_thread.daemon = True
        email_thread.start()

        return {"message": "Message sent successfully 🚀"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/messages")
def get_messages():
    messages = list(collection.find({}, {"_id": 0}))
    return messages