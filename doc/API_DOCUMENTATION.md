# API Documentation

## Authentication APIs

### Register User
POST /api/auth/register

Request Body:
{
  "name": "User Name",
  "email": "user@email.com",
  "password": "password",
  "role": "editor"
}

Response:
201 Created

---

### Login User
POST /api/auth/login

Response:
{
  "token": "JWT_TOKEN"
}

---

## Video APIs

### Upload Video
POST /api/videos/upload
Authorization: Bearer <token>

Form Data:
- video: <file>

Roles Allowed:
- Editor
- Admin

---

### List Videos
GET /api/videos
Authorization: Bearer <token>

---

### Stream Video
GET /api/videos/stream/:id

Description:
Public endpoint used for HTML video streaming.
Supports HTTP range requests.
