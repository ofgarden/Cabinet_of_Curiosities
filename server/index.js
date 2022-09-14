'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const router = require('./router/router');
const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.Atlas_Name}:${process.env.Atlas_Pass}@solo-project.ys3ineq.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to MongoDB 📚');
  });

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} 🚀`);
});
