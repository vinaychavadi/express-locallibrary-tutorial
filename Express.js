var express=require('express');
var app=express();
//app.set('view engine','jade');
app.set('view engine', 'pug')

//app.get('/',function(req,res)
//{
 //   res.write('<h1>Hello World!<h1>'); //write a response
  //  res.end(); //end the response
//});
//app.get('/about', function(req, res) {
    //res.write('<h1>About<h1>'); //write a response
   // res.end(); //end the response
 // });
 app.get('/', function (req, res) {
    res.render('mytemp', { title: 'Hey', message: 'Hello there!',message2:'Vinay C',mymessage:"This is my content" })
  })
var server=app.listen(3000,function()
{
    console.log("Server Started");
});

var port = process.env.PORT || 3000;
server.listen(port, () =>{

    console.log("Server Started");
});
console.log("Server running at http://localhost:%d", port);