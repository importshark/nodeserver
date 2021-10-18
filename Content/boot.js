var fs = require('fs');
var path = require('path')
var http = require('http');

var PORT = 3000;

var staticServe = function(req, res) {
     if (req.url === "/") {
        var stream = fs.createReadStream("assets/index.html");
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });	
      

        stream.pipe(res);
}
};

var httpServer = http.createServer(staticServe);
httpServer.listen(PORT);

console.log(`Server is running on PORT: ${PORT}`);
