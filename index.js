const express=require('express');
const path=require('path');
const handlebars=require('handlebars');
const exphbs=require('express-handlebars');
const {allowInsecureProtypeAccess}=require('@handlebars/allow-prototype-access');
const bodyparser=require('body-parser');

const app= express();
const port=(process.env.PORT||3000)
app.listen(port, (req,res)=>{
    console.log("Server started at port: "+port);
})