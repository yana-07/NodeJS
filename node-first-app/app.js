const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// node.js will not just execute the script but keep it running to listen for incoming requests
server.listen(300);