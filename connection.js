const mongoose = require('mongoose');


async function connect() {
  mongoose.connect(
  "mongodb+srv://sameer:12345677@cluster0.mongodb.net/notes-app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
      })
    // mongoose.connect(
    // "mongodb://localhost:27017/notes-app",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // })
}

module.exports = { connect };
