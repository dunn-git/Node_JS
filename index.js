const express = require("express");
const path = require("path");

const app = express();

//app.get("/", (req, res) => {
//    //res.send("Hello World");
//    //res.send("<h1>Hello World</h1>");
//    res.sendFile(path.join(__dirname, "website", "index.html"));
//});

//Set static Folder - it will load everything automatically , no need of Content-Type
app.use(express.static(path.join(__dirname, "website")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
