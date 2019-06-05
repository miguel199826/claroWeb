const express = require('express');
const cons= require('consolidate');
// concatena una direccion
const path = require('path');
//Morgan permite saber que esta sucediendo cuando se realiza una peticion
const morgan = require('morgan');
const mysql=require('mysql');
const myConnection = require('express-myconnection');
const app = express();
//importar rutas
const customerRoutes=require('./routes/customer');
const bodyParser=require('body-parser');

//settings
app.set('port',process.env.PORT || 3000);
// render en html

app.engine('html',cons.swig);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','html');
/*//Para ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));*/

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password: 'Miguel1998xd',
    port:3306,
    database:'TallerSQL'
},'single'));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
//routes
app.use('/',customerRoutes);


//static files
app.use(express.static(path.join(__dirname,'public')))

// Empezando servidor

app.listen(app.get('port'),()=>{
    console.log('Server 3000');
});