const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/princess-restaurant');

const princesses = require('./routes/princesses');

let app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/princesses', princesses);

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


module.exports = app;