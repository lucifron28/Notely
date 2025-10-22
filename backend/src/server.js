import express from "express";
import router from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/notes", router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});


