```mermaid
flowchart LR
    User[User Browser<br/>React + Vite]

    subgraph Frontend
        UI[UI Pages<br/>Login · Register · Dashboard]
        SocketClient[Socket.io Client]
    end

    subgraph Backend
        API[Express REST API]
        Auth[JWT Auth & RBAC]
        Processor[Video Processing Service]
        SocketServer[Socket.io Server]
        Streamer[Video Streaming<br/>HTTP Range]
    end

    subgraph Storage
        DB[(MongoDB Metadata)]
        Files[(Video Files Local Storage)]
    end

    User --> UI
    UI --> API
    UI --> SocketClient

    API --> Auth
    API --> Processor
    API --> DB
    API --> Files

    Processor --> SocketServer
    SocketServer --> SocketClient

    UI --> Streamer
    Streamer --> Files


### Architecture Explanation

- The frontend (React + Vite) handles user interaction, uploads, and video playback.
- REST APIs manage authentication, video metadata, and upload operations.
- Video processing runs asynchronously and emits progress updates via Socket.io.
- MongoDB stores metadata, while video files are stored locally.
- Video streaming is handled using HTTP range requests for efficient playback.
