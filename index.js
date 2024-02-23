const express=require('express');
const path=require('path');
const handlebars=require('handlebars');
const exphbs=require('express-handlebars');
const {allowInsecureProtypeAccess, allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
const bodyparser=require('body-parser');


//app
var app= express();


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//list
app.get('/',(req, res)=>{
    res.send(`
      <h2>Welcome to students database!</h2>
      <h3>Click to get access to the link <b><a href="/students/list">Database</a> </b></h3>
    `);
});

//
app.set('/views',path.join(__dirname,'/views'));
/*
app.engine('hbs',exphbs({
    handlebars: allowInsecureProtypeAccess(handlebars),
    extname:'hbs',
    defaultLayout:'MainLayout',
    layoutsDir:__dirname+'/views/layouts'
}));
* */

app.engine('.hbs',
    exphbs.engine({
        handlebars:allowInsecurePrototypeAccess(handlebars),
        extname:'hbs',
        defaultLayout: 'MainLayout',
        layoutsDir:__dirname+'/views/layouts'
    })
);
app.set("view engine","hbs");

//server listener port
const port=(process.env.PORT||3000)
app.listen(port, (req,res)=>{
    console.log("Server started at port: "+port);
});

