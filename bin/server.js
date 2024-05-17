var http = require("http");
var app = require("../src/app");

var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}\n`);
});

server.on("error", function (error) {
  console.error("Server failed to start:", error.message);
});
