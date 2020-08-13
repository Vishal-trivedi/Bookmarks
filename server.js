const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config');

const errorHandler = require('./middleware/error')

const bookmark = require('./routes/bookmark')
const tag = require('./routes/tag')

const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(config.mongouri, config.mongoOption, err => {
    if (err) {
      console.log(err);
    }
    console.log('MongoDB is connected');
  });

app.use('/api/bookmarks',bookmark)
app.use('/api/tags',tag)

app.use(errorHandler)

const port = config.port || 5000


app.listen(config.port, () =>
  console.log(`server is up at port ${config.port}`)
);
