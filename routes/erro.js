module.exports=function(app){
    app.get('/error',function (request,response){
  
        response.render("error");
    
    });
}