import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
