from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

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