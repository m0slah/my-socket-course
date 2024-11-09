//1. packages

import express from "express";

import http from http;

import { fileURLToPath } from "node:url"

import {dirname, join } from "node:path"

import { Server } from "socket.io";

//2. instances
const app = express();
const server = http.createServer(app);
const io = new Server(server);
 