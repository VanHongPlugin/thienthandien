const http = require('http');
const app = require('/opt/render/project/src/index.js');
const port = process.env.PORT || 4000;
const server = http.createServer(app)

server.listen(port, () => {
  
  })
