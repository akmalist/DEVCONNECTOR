const express = require('express');
app = express();

const connectDB = require('./config/db');

//Mongo Connection Database
connectDB();

app.get('/', (req, res) => {
  return res.send('API is created and working!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  return console.log(`Server has launched on port ${PORT}`);
});
