const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/note');
const loginRoutes = require('./routes/user');
const connection = require('./connection');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const corsOptions = {
  origin: ["http://localhost:4200", "https://notes-app-tau-five-81.vercel.app/"], // Allow requests from your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
connection.connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

app.use('/', loginRoutes);

// Routes
app.use('/notes', noteRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

