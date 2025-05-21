# ✅ MERN Task Manager App

A full-stack Task Manager web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It supports user registration, login, JWT-based authentication, and full task CRUD functionality. Fully deployed and styled with **Tailwind CSS**.

---

## ✨ Features

### 🔐 Authentication
- Register and Login
- JWT token-based authentication
- Protected routes (React Router + Context)
- Persist login across refresh

### 📝 Task Management (CRUD)
- Add, edit, delete, and view tasks
- Tasks are private per user
- Real-time feedback and navigation

### 💄 UI/UX
- Modern and responsive UI with Tailwind CSS
- Clear form validation and error handling
- Clean navigation and route protection

---

## 📁 Project Structure

project-root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js (or index.js)
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ └── App.jsx, main.jsx
│ ├── public/
│ └── .env

---

## 🚀 Getting Started

### 🧩 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)

---

### ⚙️ Backend Setup

```bash
cd backend

npm install

Create a .env file in the backend folder:


PORT=5000

MONGO_URI=your_mongo_db_uri

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

Start the backend server:

npm run dev

💻 Frontend Setup

cd frontend

npm install

Create a .env file in the frontend folder:

VITE_API_BASE_URL=http://localhost:5000/api
Start the frontend app:


npm run dev
🛠 Technologies Used
Frontend: React, Vite, React Router v6, Tailwind CSS, Axios, Context API

Backend: Express.js, MongoDB, Mongoose, JWT, bcrypt, dotenv

Other: Vite, CORS, nodemon

🧪 API Endpoints

Auth Routes (/api/auth)

POST /register - Register new user

POST /login - Login user and return token

Task Routes (/api/tasks)

All protected by JWT middleware

GET / - Get all tasks for user

POST / - Create a task

GET /:id - Get task by ID

PUT /:id - Update task

DELETE /:id - Delete task

📦 Deployment
You can deploy:

Frontend to Vercel or Netlify

Backend to Render, Railway, or Heroku

Be sure to:

Update .env files with production URLs

Handle CORS in backend accordingly

🙌 Author
Made by ALI AKBAR ANSARI

🏁 License
This project is open-source and free to use under the MIT License.


