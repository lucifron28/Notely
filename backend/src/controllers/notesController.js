import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log(`getAllNotes Controller Error: ${error}}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = (req, res) => {
  res.status(201).json("Note created successfully");
};

export const updateNote = (req, res) => {
  res.status(200).json("Note updated successfully");
};

export const deleteNote = (req, res) => {
  res.status(201).json("Note deleted successfully");
};
