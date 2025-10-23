import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";
import router from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(rateLimiter);
app.use("/api/notes", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
