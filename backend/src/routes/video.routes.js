import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";
import { allowRoles } from "../middleware/rbac.js";
import { uploadVideo, streamVideo, listVideos } from "../controllers/video.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", auth, allowRoles("admin", "editor"), upload.single("video"), uploadVideo);
router.get("/", auth, listVideos);

router.get("/stream/:id", streamVideo);

export default router;
