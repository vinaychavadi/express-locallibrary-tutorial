'use strict';
const http = require('http');
const server = http.createServer((req,res) => {
    
    res.writeHead(200, {"Content-Type": "text/html"});

   var url = req.url;
   res.write(url)
 if(url ==='/about'){
    res.write('<h1>about us page<h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/contact'){
    res.write('<h1>contact us page<h1>'); //write a response
    res.end(); //end the response
 }else{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
 }
    
})

var port = process.env.PORT || 1337;
server.listen(port, () =>{

    console.log("Server Started");
});
console.log("Server running at http://localhost:%d", port);
