import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  deleteAllNote,
  getNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.delete("/", deleteAllNote);

export default router;
