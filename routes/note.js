const express = require('express');
const router = express.Router();
const Note = require('../models/note');


router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  res.json(newNote);
});

// Update a note by ID
router.put("/:id", async(req, res) => {
  const { title, content } = req.body;
 await  Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

module.exports = router;