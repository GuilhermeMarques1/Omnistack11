const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
    name: "Guilherme Marques",
  });
});

app.listen(3333, () => {
  console.log('App is listening on port 3333');
});
