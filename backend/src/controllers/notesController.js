export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes");
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
