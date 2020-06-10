const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const publicPath = path.join(__dirname, '..', 'public');

const url = 'mongodb://127.0.0.1:27017/expensify'

app.use(express.static(publicPath));
app.use(cors());
app.use(express.json());


mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


// Routes

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const expensesRouter = require('./routes/expenses');
const usersRouter = require('./routes/users');

// Listen

app.listen(3000, () => {
    console.log('Server is up');
});