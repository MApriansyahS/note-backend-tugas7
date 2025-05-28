import Notes from "../model/NotesModel.js";

export const createNotes = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const notes = await Notes.create({
      title,
      content,
      userId,
    });
    res.status(201).json({
      message: "Notes berhasil dibuat",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  const userId = req.user.id;

  try {
    const notes = await Notes.findAll({ where: { userId } });
    res.status(200).json({
      message: "Notes berhasil diambil",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNotes = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const notes = await Notes.update(
      { title, content },
      {
        where: {
          id,
          userId, // Pastikan hanya user yang memiliki note yang bisa mengupdate
        },
      }
    );
    if (notes[0] === 0) {
      return res.status(404).json({ message: "Notes tidak ditemukan" });
    }
    res.status(200).json({
      message: "Notes berhasil diupdate",
      userId,
      data: { title, content },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const notes = await Notes.destroy({
      where: {
        id,
        userId, // Pastikan hanya user yang memiliki note yang bisa menghapus
      },
    });
    if (notes === 0) {
      return res.status(404).json({ message: "Notes tidak ditemukan" });
    }
    res.status(200).json({
      message: "Notes berhasil dihapus",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
