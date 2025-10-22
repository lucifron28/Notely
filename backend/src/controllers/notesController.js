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

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found." });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log(`getNote Controller Error: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json(note);
  } catch (error) {
    console.log(`createNote Controller Error: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const result = await Note.findByIdAndUpdate(id, update, { new: true });
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(201).json({ mesage: "Note updated successfully!" });
  } catch (error) {
    console.log(`updateNote Controller Error: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Note.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.log(`deleteNote Controller Error: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteAllNote = async (req, res) => {
  try {
    await Note.deleteMany({});
    res.status(200).json({ message: "All notes deleted successfully!" });
  } catch (error) {
    console.log(`deleteAllNote Controller Error: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
