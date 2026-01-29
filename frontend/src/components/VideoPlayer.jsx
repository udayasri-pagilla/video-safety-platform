import React from "react";
export default function VideoPlayer({ id }) {
  return (
    <video width="400" controls>
      
      <source
  src={`${import.meta.env.VITE_API_URL||
    "http://localhost:5000"}/api/videos/stream/${v._id}`}
/>

    </video>
  );
}
