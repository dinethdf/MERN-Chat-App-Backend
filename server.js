import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongodb.js";

const app = express();

dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   // root route Local host
//   res.send("hello World Dineth");
// });

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server Running on Port ${PORT}`);
});
