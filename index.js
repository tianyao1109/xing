const http = require("http");
http.createServer(function(req,res){
   res.end("./index.html")
}).listen(8080)