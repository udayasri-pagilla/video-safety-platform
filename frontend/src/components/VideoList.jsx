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
  <div key={v._id} className="video-card">
    <p>{v.filename}</p>
    <p>Status: {v.status} | Progress: {v.progress}%</p>
    {(v.status === "safe" || v.status === "flagged") && (
      <VideoPlayer id={v._id} />
    )}
  </div>
))}

    </div>
  );
}
