# 🚀 Full Stack Portfolio (React + FastAPI + MongoDB)

A modern **Full Stack Portfolio Website** built using **React (Frontend)** and **FastAPI (Backend)** with **MongoDB Atlas** as the database.
This project showcases my skills, projects, and allows users to send messages via a contact form.

---

## 🌐 Live Demo

* 🔗 Frontend: https://portfolio-project-swart-five.vercel.app
* 🔗 Backend API: https://portfolio-project-qgov.onrender.com
* 📡 API Docs: https://portfolio-project-qgov.onrender.com/docs

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* CSS (Custom Styling)
* Framer Motion (Animations)

### Backend

* FastAPI (Python)
* Uvicorn (ASGI Server)

### Database

* MongoDB Atlas (Cloud Database)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## ✨ Features

* 🎨 Modern UI with animations
* 📱 Fully responsive design
* 📩 Contact form with backend integration
* 🧾 Admin dashboard to view messages
* ⚡ Fast API performance
* 🌐 Fully deployed full-stack app

---

## 📂 Project Structure

```
portfolio-project/
│
├── frontend/          # React App
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│
├── backend/           # FastAPI App
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone Repository

```
git clone https://github.com/RoshanShirke/portfolio-project.git
cd portfolio-project
```

---

### 2️⃣ Setup Backend

```
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

### ▶ Run Backend

```
python -m uvicorn main:app --reload
```

👉 Runs on: http://127.0.0.1:8000

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

👉 Runs on: http://localhost:5173

---

## 🔐 Environment Variables

Create environment variable in backend:

```
MONGO_URI=your_mongodb_connection_string
```

---

## 📡 API Endpoints

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| GET    | `/`         | Check server   |
| POST   | `/contact`  | Submit message |
| GET    | `/messages` | Fetch messages |

---

## 🧠 Learnings

* Full-stack integration (React + FastAPI)
* REST API development
* MongoDB Atlas cloud usage
* Deployment using Vercel & Render
* Handling CORS & production issues

---

## 📌 Future Improvements

* 🔐 Admin authentication
* 📊 Analytics dashboard
* 🤖 AI chatbot integration
* 🌍 Custom domain setup

---

## 👨‍💻 Author

**Roshan Shirke**

* 📧 [roshanshirke6735@gmail.com](mailto:roshanshirke6735@gmail.com)
* 🔗 LinkedIn: https://www.linkedin.com/in/roshan-shirke-527089306
* 💻 GitHub: https://github.com/RoshanShirke

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and Share it!

---
