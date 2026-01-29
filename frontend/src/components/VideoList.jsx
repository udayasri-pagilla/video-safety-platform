// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { socket } from "../socket";
// import VideoPlayer from "./VideoPlayer";

// export default function VideoList() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     api.get("/videos").then(res => setVideos(res.data));

//     socket.on("progress", ({ videoId, progress }) => {
//       setVideos(videos =>
//         videos.map(v =>
//           v._id === videoId ? { ...v, progress } : v
//         )
//       );
//     });
//   }, []);

//   return (
//     <div>
//       <h3>Uploaded Videos</h3>
//       {videos.map(v => (
//         <div key={v._id}>
//           <p>{v.filename} | {v.status} | {v.progress}%</p>
//           {(v.status === "safe" || v.status === "flagged") &&
//             <VideoPlayer id={v._id} />
//           }
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { connectSocket, disconnectSocket } from "../socket";
import VideoPlayer from "./VideoPlayer";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("/videos").then(res => setVideos(res.data));

    const socket = connectSocket();

    socket.on("progress", ({ videoId, progress }) => {
      setVideos(prev =>
        prev.map(v =>
          v._id === videoId ? { ...v, progress } : v
        )
      );
    });

    return () => {
      socket.off("progress");
      disconnectSocket();
    };
  }, []);

  return (
    <div>
      <h3>Uploaded Videos</h3>
     {videos.map(v => (
  <div key={v._id} style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #e5e7eb" }}>
    <strong>{v.filename}</strong>
    <p style={{ fontSize: "14px", color: "#6b7280" }}>
      Status: {v.status} | Progress: {v.progress}%
    </p>

    {(v.status === "safe" || v.status === "flagged") && (
      <video controls style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}>
        <source
  src={`${import.meta.env.VITE_API_URL||"http://localhost:5000"}/api/videos/stream/${v._id}`}
  type="video/mp4"
/>

      </video>
    )}
  </div>
))}


    </div>
  );
}      