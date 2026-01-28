// import React from "react";
// import UploadVideo from "../components/UploadVideo";
// import VideoList from "../components/VideoList";

// export default function Dashboard() {
//   return (
//     <div>
//       <h1>Video Dashboard</h1>
//       <UploadVideo />
//       <VideoList />
//     </div>
//   );
// }

import React from "react";
import UploadVideo from "../components/UploadVideo";
import VideoList from "../components/VideoList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
  <div style={{ maxWidth: "1000px", margin: "40px auto" }}>
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Video Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <UploadVideo />
      <VideoList />
    </div>
  </div>
);

}


