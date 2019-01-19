module.exports=function(app){
    app.get('/estoque',function (request,response){
        //response.render("navbar");
        response.render("estoque");
    
    });
}