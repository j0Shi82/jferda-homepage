const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(8089, () => {
  console.log('server started at localhost:8089');
});
