const mongoose = require('mongoose');


async function connect() {
  mongoose.connect("process.env.MONGODB_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    // mongoose.connect(
    // "mongodb://localhost:27017/notes-app",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // })
}

module.exports = { connect };
