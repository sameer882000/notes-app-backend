const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
},
{
    timestamps: true
});
    
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;