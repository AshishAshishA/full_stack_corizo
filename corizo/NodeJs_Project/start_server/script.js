const http = require('http');
const fileSys = require('fs');

const fileContent = fileSys.readFileSync('index.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    // res.setHeader("Content-type" ,"application /json");
    // res.end(JSON.stringify({status:200,message:"Server is working"}));
    res.end(fileContent);
});

server.listen(5000,'127.0.0.1',()=>{
    console.log("Listening on port 5000");
});