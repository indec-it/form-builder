const path = require('path');
const express = require('express');
require('dotenv').config({path: path.join(__dirname, '.env')});

const app = express();

const {PORT} = process.env;

app.use(express.static(__dirname));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`App running at port ${PORT}`));
