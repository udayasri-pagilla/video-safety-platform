import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  owner: mongoose.Schema.Types.ObjectId,
  tenantId: String,
  filename: String,
  path: String,
  status: { type: String, enum: ["uploaded", "processing", "safe", "flagged"] },
  progress: Number
});

export default mongoose.model("Video", videoSchema);
