const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const auth = require("../middleware/auth");


router.get('/', auth,  async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', auth,  async (req, res) => {
    const { title, content } = req.body;

    try {
      const newNote = new Note({
        title,
        content,
        createdBy: req.user.id, // Set createdBy to the authenticated user's ID
      });

      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

// Update a note by ID
router.put("/:id", auth, async(req, res) => {
  const { title, content } = req.body;
 await  Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.delete('/:id', auth, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

module.exports = router;