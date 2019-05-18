const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../db/model.js');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/public')));

// routes go here
app.post('/reviews', (req, res) => {
  const listing = req.body.randomListing;
  model.getMessages(listing, (err, data) => {
    if (err) {
      res.status(400);
      res.send('ERROR');
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

module.exports = app;
