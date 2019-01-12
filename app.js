const app = require('./custom-express');


app.listen(3000,function(){
    console.log("App usando Express em http:localhost3000")
})
/*
app.get("/", function (request,response){
  
    response.render("index");

})

app.get("/produtos", function (request,response){

    response.render("produtos");

})

*/
