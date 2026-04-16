from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://portfolio-project-swart-five.vercel.app"
    ],  # ✅ your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
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
    collection.insert_one(data.dict())   # 🔥 SAVE DATA
    return {"message": "Message saved successfully"}

@app.get("/messages")
def get_messages():
    messages = list(collection.find({}, {"_id": 0}))
    return messages