# System Architecture

## Overview
The application follows a classic client–server architecture with a React frontend and a Node.js backend.
It is designed to be modular, scalable, and easy to extend.

---

## High-Level Architecture

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Real-time communication: Socket.io
- Video storage: Local file system
- Authentication: JWT

---

## Data Flow

1. User interacts with the React frontend.
2. API requests are sent to the Express backend.
3. Backend authenticates the user using JWT.
4. Videos are uploaded and stored locally.
5. Metadata is stored in MongoDB.
6. Processing progress is sent to frontend via Socket.io.
7. Processed videos are streamed using HTTP range requests.

---

## Security Considerations

- JWT-based authentication for protected APIs
- Role-Based Access Control (RBAC)
- Tenant-based data isolation
- Streaming endpoint kept public due to browser limitations

---

## Scalability Considerations

- Video processing is modular and can be replaced with background jobs.
- Local storage can be replaced with cloud storage (AWS S3).
- Sensitivity analysis can be replaced with ML/AI models.
