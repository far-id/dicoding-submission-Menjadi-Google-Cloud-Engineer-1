'use strict';

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static('public'));
app.set('trust proxy', true);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);