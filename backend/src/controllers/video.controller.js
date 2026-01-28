// import fs from "fs";
// import Video from "../models/Video.js";
// import { processVideo } from "../services/videoProcessor.service.js";

// export const uploadVideo = async (req, res) => {
//   const video = await Video.create({
//     owner: req.user.id,
//     tenantId: req.user.tenantId,
//     filename: req.file.originalname,
//     path: req.file.path,
//     status: "uploaded",
//     progress: 0
//   });

//   processVideo(video._id);
//   res.json(video);
// };

// export const listVideos = async (req, res) => {
//   const videos = await Video.find({ tenantId: req.user.tenantId });
//   res.json(videos);
// };

// export const streamVideo = async (req, res) => {
//   const video = await Video.findById(req.params.id);
//   const stat = fs.statSync(video.path);
//   const range = req.headers.range;

//   const start = Number(range.replace(/\D/g, ""));
//   const end = Math.min(start + 1e6, stat.size - 1);

//   res.writeHead(206, {
//     "Content-Range": `bytes ${start}-${end}/${stat.size}`,
//     "Content-Type": "video/mp4",
//     "Accept-Ranges": "bytes"
//   });

//   fs.createReadStream(video.path, { start, end }).pipe(res);
// };
import fs from "fs";
import Video from "../models/Video.js";
import { processVideo } from "../services/videoProcessor.service.js";

/**
 * Upload video and start processing
 */
export const uploadVideo = async (req, res) => {
  try {
    const video = await Video.create({
      owner: req.user.id,
      tenantId: req.user.tenantId,
      filename: req.file.originalname,
      path: req.file.path,
      status: "uploaded",
      progress: 0,
    });

    processVideo(video._id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};

/**
 * List videos for tenant
 */
export const listVideos = async (req, res) => {
  const videos = await Video.find({ tenantId: req.user.tenantId });
  res.json(videos);
};

/**
 * Public streaming endpoint (HTML video compatible)
 */
export const streamVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) return res.sendStatus(404);

  const videoPath = video.path;
  const videoSize = fs.statSync(videoPath).size;
  const range = req.headers.range;

  if (!range) {
    res.writeHead(200, {
      "Content-Length": videoSize,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(videoPath).pipe(res);
    return;
  }

  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  res.writeHead(206, {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": end - start + 1,
    "Content-Type": "video/mp4",
  });

  fs.createReadStream(videoPath, { start, end }).pipe(res);
};
