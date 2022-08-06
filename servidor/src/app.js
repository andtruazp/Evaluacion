const express= require('express');
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection= require('express-myconnection');

const app=express();
const cors= require('cors');

app.set('port',3000);

//middleware
app.use(cors());
app.use(morgan('dev'));

//conexion a la base de datos
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'libros'
},'single'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routers/libros-router'));

module.exports= app;