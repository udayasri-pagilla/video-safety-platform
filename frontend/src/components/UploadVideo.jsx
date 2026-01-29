
import React, { useState } from "react";
import api from "../api/axios";

export default function UploadVideo() {
  const [loading, setLoading] = useState(false);

  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("video", file);

    try {
      setLoading(true);
      await api.post("/videos/upload", form);
      alert("Upload started. Processing video...");
      window.location.reload(); // simple & reliable
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" onChange={upload} />
      {loading && <p>Uploading...</p>}
    </div>
  );
}
