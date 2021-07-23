const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const path = require('path');
const app = express();

app.use(
	  expressStaticGzip(path.join(__dirname, 'build'), {
	  enableBrotli: true, // only if you have brotli files too
  }),
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log('Сервер стартанул на http://localhost:9000')
app.listen(9000);