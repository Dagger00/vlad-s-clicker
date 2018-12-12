const http = require('http');
const fs = require('fs');
const staticNode = require('node-static');

const file = new staticNode.Server('./public');
const port = process.env.PORT;
const PORT = port === undefined ? 8000 : port;

const server = http.createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
});


server.listen(PORT);
console.log('Server started at port:', PORT);
