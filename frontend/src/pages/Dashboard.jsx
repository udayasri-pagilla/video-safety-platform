


import React, { useState } from "react";
import UploadVideo from "../components/UploadVideo";
import VideoList from "../components/VideoList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // all | safe | flagged

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto" }}>
      <div className="card">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Video Dashboard</h1>
          <button onClick={logout}>Logout</button>
        </div>

        {/* Upload Section */}
        <UploadVideo />

        {/* Filter Section */}
        <div style={{ margin: "20px 0" }}>
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Filter by Status:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="safe">Safe</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>

        {/* Video List */}
        <VideoList filter={filter} />
      </div>
    </div>
  );
}