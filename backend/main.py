from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define data structure
class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}

# POST API
@app.post("/contact")
def submit_contact(data: Contact):
    print(data)  # for now, just print in terminal
    return {"message": "Message received successfully"}