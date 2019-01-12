

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator=require('express-validator');


const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/static',express.static('./node_modules/bootstrap/dist/'))


consign().include('./routes').then('./config').then('./repository').into(app);

/*
require('./routes/index')(app);
require('./routes/produtos')(app);
*/



app.use(function(request,response,next){
    
    console.log(request.originalUrl);
    let error="Página não encontrada"
    response.status(404).render('erro',{error})
})

app.use(function(error, request,response,next){
    
    console.log(request.originalUrl);
    
    response.status(500).render('erro',{error})
    console.error(error)
})





module.exports = app;