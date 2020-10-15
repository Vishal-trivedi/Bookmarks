const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config');

const errorHandler = require('./middleware/error')

const bookmark = require('./routes/bookmark')
const tag = require('./routes/tag')

const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(process.env.mongouri, config.mongoOption, err => {
    if (err) {
      console.log(err);
    }
    console.log('MongoDB is connected');
  });

app.use('/api/bookmarks',bookmark)
app.use('/api/tags',tag)

app.use(errorHandler)

const port = process.env.PORT || 5000


app.listen(port, () =>
  console.log(`server is up at port ${port}`)
);
