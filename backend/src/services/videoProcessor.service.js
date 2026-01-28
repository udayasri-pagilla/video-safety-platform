import Video from "../models/Video.js";
import { analyzeSensitivity } from "./sensitivity.service.js";
import { io } from "../socket.js";

export async function processVideo(videoId) {
  const video = await Video.findById(videoId);
  video.status = "processing";
  await video.save();

  for (let p = 10; p <= 100; p += 10) {
    await new Promise(r => setTimeout(r, 500));
    video.progress = p;
    io.emit("progress", { id: videoId, progress: p });
  }

  video.status = analyzeSensitivity(video.filename);
  await video.save();
}
