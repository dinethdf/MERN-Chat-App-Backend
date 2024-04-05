import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongodb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route Local host
//   res.send("hello World Dineth");
// });

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server Running on Port ${PORT}`);
});
