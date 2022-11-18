const port = 443;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
