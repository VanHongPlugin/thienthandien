const http = require('http');
const app = require('/index.js');
const port = process.env.PORT || 4000;
const server = http.createServer(app)

server.listen(port, () => {
  
  }
