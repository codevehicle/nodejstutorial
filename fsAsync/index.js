const fs = require("fs");

// fs.writeFile("read.txt", "today is awesome day", 
// (err)=>{
//     console.log("files is create");
// });

// fs.appendFile("read.txt","plz likeand share and subscribe my channel", (err)=>{
//     console.log("task compled");
// });

fs.readFile("read.txt","UtF-8",(err,data)=>{
    console.log(data);
});