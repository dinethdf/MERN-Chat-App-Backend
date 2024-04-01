import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongodb.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route Local host
//   res.send("hello World Dineth");
// });

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server Running on Port ${PORT}`);
});
