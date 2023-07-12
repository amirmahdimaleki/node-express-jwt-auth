const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/authRoutes')
const authRoutes = require('./routes/authRoutes')
const authController = require('./controllers/authController')

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://joon:babyiloveyou@cluster0.8tdg4jr.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes)