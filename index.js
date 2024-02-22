const express=require('express');
const path=require('path');
const handlebars=require('handlebars');
const exphbs=require('express-handlebars');
const {allowInsecureProtypeAccess}=require('@handlebars/allow-prototype-access');
const bodyparser=require('body-parser');

//app
var app= express();


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//
app.get('/',(req, res)=>{
    res.send(`
      <h2>Welcome to students database!</h2>
      <h3>Click to get access to the link <b><a href="/students/list">Database</a> </b></h3>
    `);
});
//server listener port
const port=(process.env.PORT||3000)
app.listen(port, (req,res)=>{
    console.log("Server started at port: "+port);
})