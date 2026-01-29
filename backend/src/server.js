import "dotenv/config";   //  THIS LINE IS CRITICAL
import http from "http";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { initSocket } from "./socket.js";

const server = http.createServer(app);

// Initialize socket.io
initSocket(server);

// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running");
});
