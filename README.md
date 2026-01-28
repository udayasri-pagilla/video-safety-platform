# Video Upload, Sensitivity Processing & Streaming Platform

## 📌 Project Overview
This project is a full-stack web application built as part of a technical assignment.  
It allows users to upload videos, process them for content sensitivity, and stream them with real-time progress updates.

The application demonstrates real-world backend architecture, authentication, role-based access control, real-time communication, and video streaming.

---

## 🚀 Features

### ✅ Authentication & Authorization
- User Registration and Login
- JWT-based authentication
- Role-Based Access Control (RBAC)
  - **Viewer**: View videos only
  - **Editor**: Upload and manage videos
  - **Admin**: Full access

### ✅ Video Management
- Secure video upload using Multer
- Local file storage
- Metadata stored in MongoDB

### ✅ Video Processing Pipeline
- Simulated sensitivity analysis (safe / flagged)
- Processing progress tracked in real time
- Live updates using Socket.io

### ✅ Video Streaming
- HTTP range-based streaming
- Supports play, pause, seek
- Optimized for browser `<video>` playback

### ✅ Multi-Tenant Design
- Users can access only their own uploaded videos
- Data isolation enforced at database level

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Socket.io Client
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)
- Socket.io (real-time updates)

---

## 📂 Project Structure

video-safety-platform/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── config/
│ │ └── server.js
│ ├── uploads/
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ └── api/
│ ├── index.html
│ └── package.json
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd video-safety-platform
2️⃣ Backend Setup
cd backend
npm install
Create a .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/video_assignment
JWT_SECRET=videosecret123
Start backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
Open browser:

http://localhost:5173
🔐 User Flow
Register a new user (Editor role recommended)

Login

Upload a video

Watch real-time processing progress

Stream the processed video

🧠 Design Decisions & Assumptions
Sensitivity analysis is rule-based for demonstration purposes

Streaming endpoint is public due to HTML video limitations

JWT authentication secures API access

Socket.io used for real-time processing updates

Local storage used for simplicity

📈 Future Improvements
AI/ML-based sensitivity detection

Cloud storage (AWS S3)

Signed URLs for secure streaming

Video compression & multiple resolution

## 📚 Documentation

Detailed documentation is available in the `docs/` folder:

- Architecture overview
- API documentation
- User guide
- Design assumptions
