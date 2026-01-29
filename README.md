# Video Safety Platform

A full-stack web application that enables users to upload videos, process them for content sensitivity analysis, and stream processed videos with real-time progress updates.

---

## 🚀 Live Deployment

- **Frontend (Vercel):**  
  👉 https://video-safety-platform.vercel.app/

- **Backend (Render):**  
  👉 https://video-safety-platform.onrender.com

> The frontend communicates with the backend via secure REST APIs and Socket.io using environment-based configuration.

---

## 🚀 Features

- User authentication with JWT
- Role-based access control (Viewer, Editor, Admin)
- Multi-tenant user isolation
- Video upload with validation
- Automated video sensitivity processing
- Real-time processing progress using Socket.io
- Video streaming using HTTP range requests
- Advanced filtering (Safe / Flagged videos)
- Responsive React-based UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file uploads)
- Socket.io
- JWT Authentication

### Infrastructure
- Backend Hosting: Render
- Frontend Hosting: Vercel
- Database: MongoDB Atlas

---

## 📂 Project Structure

video-safety-platform/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ └── middleware/
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ └── api/
│ └── package.json
├── doc/
│ ├── architecture-diagram.png
│ └── ARCHITECTURE.md
└── README.md


---

## 📁 Documentation (`doc/` Folder)

The `doc/` folder contains project documentation and design artifacts:

- **architecture-diagram.png**  
  High-level system architecture diagram showing frontend, backend, database, video processing pipeline, and streaming flow.

- **ARCHITECTURE.md**  
  Written explanation of the system architecture, design decisions, and data flow.

This documentation helps reviewers and interviewers quickly understand the system design.

---

## 🔐 Roles & Permissions

- **Viewer**: Read-only access to assigned videos
- **Editor**: Upload, manage, and process videos
- **Admin**: Full system access including user and configuration management

---

## 🔄 Video Processing Workflow

1. User uploads a video
2. Backend validates file type and size
3. Video processing starts asynchronously
4. Sensitivity analysis classifies the video as `safe` or `flagged`
5. Real-time progress updates are sent via Socket.io
6. Processed videos become available for streaming

---

## 🎥 Video Streaming

- Streaming implemented using HTTP range requests
- Enables efficient playback without loading the entire video file

---

## ⚠️ Storage Note (Important)

In the deployed version, uploaded videos are stored on **ephemeral server storage** due to free-tier hosting limitations.

In a production-grade system, this would be replaced with persistent object storage such as:
- AWS S3
- Google Cloud Storage

This limitation is documented intentionally as a design consideration.

---

## 🧪 Running Locally

### Backend
```bash
cd backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm run dev
🌍 Deployment Summary
Backend deployed on Render

Frontend deployed on Vercel

MongoDB hosted on MongoDB Atlas

Environment variables used for secure configuration

📊 Architecture Overview
Refer to the diagram and documentation in the doc/ folder for a detailed system architecture overview.

✅ Project Status
✔ Video upload & processing

✔ Real-time updates

✔ Streaming

✔ Filtering

✔ Deployed and production-ready

## Performance & Deployment Notes

The deployed application is hosted on free-tier cloud services, which introduces certain expected limitations:

- The backend service may experience cold-start delays, causing slightly slower responses after periods of inactivity.
- Video processing and appearance on the dashboard may take a short time due to asynchronous processing and server wake-up latency.
- Reloading the dashboard immediately after upload may occasionally show a temporary error if the backend is still initializing.
- Re-authentication restores the session correctly once the backend is fully responsive.

These behaviors are related to hosting constraints and not application logic.
In a production-grade setup, persistent storage and always-on services would eliminate these delays.


📌 Author
Udayasri Pagilla
Full-Stack Developer