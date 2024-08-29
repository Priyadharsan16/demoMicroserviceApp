const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Route to handle user login data
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Add data to the database
  const newUser = new User({ username, password });
  await newUser.save();

  res.send('User login data saved!');
});
// Route to check if username and password already exist in the database
app.post('/check', async (req, res) => {
  const { username, password } = req.body;

  // Check if username and password exist in the database
  const existingUser = await User.findOne({ username, password });

  if (existingUser) {
    res.send('Username and password already exist in the database');
  } else {
    res.send('Username and password do not exist in the database');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
