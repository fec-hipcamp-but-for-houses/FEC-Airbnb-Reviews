const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/public')));

// routes go here


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
