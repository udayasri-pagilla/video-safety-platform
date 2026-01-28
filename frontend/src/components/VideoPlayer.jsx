import React from "react";
export default function VideoPlayer({ id }) {
  return (
    <video width="400" controls>
      <source src={`http://localhost:5000/api/videos/stream/${id}`} />
    </video>
  );
}
