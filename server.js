

var app = require('./index.js');
var http = require('http');

var port = process.env.PORT || '8080';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, "localhost");
server.on('error', onError);
server.on('listening', onListening);

http.createServer((req, res) => {
    res.writeHead(301, { "Location": "http://" + req.headers['host'] + req.url });
    res.end();
}).listen(3000);


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
