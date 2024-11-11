// 1. packages

import express from "express";

import http from "node:http";

import { fileURLToPath } from "node:url";

import { dirname, join } from "node:path";

import { Server } from "socket.io";

// 2. instances

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 3.serving HTML file

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html")));

// 5. Start the Server
const PORT = 3000;
server.listen(PORT, () => {
  `server running on port :${PORT}`;
});
