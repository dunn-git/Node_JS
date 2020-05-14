const http = require("http");
const fs = require("fs");
const path = require("path");

//http.createServer((req,res) => {
//    //console.log(req.url);
//    res.write("Hello Hello Server Testing...");
//    res.end();
//}).listen(5000, () => console.log("Server Running.... at localhost:5000"));

const PORT = process.env.PORT || 5000;

http.createServer((req,res) => {
    let filePath = path.join(__dirname, "website", req.url === "/" ? "index.html" : req.url);

let extname = path.extname(filePath);

let contentType = "text/html";

switch (extname) {
case ".html": 
    contentType = "text/html";
    break;
case ".css": 
    contentType = "text/css";
    break;
case ".js": 
    contentType = "text/javascript";
    break;
case ".json": 
    contentType = "application/json";
    break;
case ".jpg": 
    contentType = "image/img";
    break;
case ".png": 
    contentType = "image/png";
    break;
}


fs.readFile(filePath, (err, content) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log("Page not Found");
            fs.readFile(path.join(__dirname, "website", "404.html"), (err, content) => {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end(content, "utf8");
            });
        } else {
            
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);

        }
        
    } else { 
        res.writeHead(200, {"Content-Type" : contentType});
        res.end(content, "utf8");
        
    }
});

}).listen(5000, () => console.log("Server Running.... at localhost:5000"));

//const PORT = process.env.PORT || 5000;
//server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
