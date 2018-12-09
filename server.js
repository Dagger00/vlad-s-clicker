const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  var html = fs.readFileSync('index.html', 'utf-8');
  response.end(html);
});

var port = process.env.PORT;
server.listen('3000');
console.log('Server started');