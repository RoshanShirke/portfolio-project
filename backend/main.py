from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os

app = FastAPI()

# ✅ CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://portfolio-project-swart-five.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ MongoDB Atlas Connection (IMPORTANT)
MONGO_URI = os.getenv("MONGO_URI")  # will come from Render env variable

client = MongoClient(MONGO_URI)
db = client["portfolio_db"]
collection = db["contacts"]

# Data model
class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}

@app.post("/contact")
def submit_contact(data: Contact):
    try:
        collection.insert_one(data.dict())
        return {"message": "Message saved successfully"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/messages")
def get_messages():
    try:
        messages = list(collection.find({}, {"_id": 0}))
        return messages
    except Exception as e:
        return {"error": str(e)}