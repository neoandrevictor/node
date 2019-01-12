

module.exports=function(app){
    app.get('/produtos',function (request,response,next){
        
        /*
        const conexao=require('../config/connectionFactory')();
        const ProdutoDao = require('../repository/produtoDao')();
        */


        const conexao= app.config.connectionFactory();
        const produtoDao= new app.repository.produtoDao(conexao);


        

    											
        
        produtoDao.listar(function(error, resultados){
            

         

                if (error) {

                    next(error);
                    return;
                }

                response.format({
                    html:function(){
                        response.render('produtos',{livros:resultados})
                    }
                    ,
                    json:function(){
                        response.json(resultados)
                    }
                })
                    
                    
                 

          

        })
        
        conexao.end();
            
    });


    app.get('/cadastro',function(request,response,next){

       
        const conexao= app.config.connectionFactory();
        const produtoDao= new app.repository.produtoDao(conexao);


        

    											
        
        produtoDao.listar(function(error, resultados){
            

         

                if (error) {

                    next(error);
                    return;
                }

                response.render('cadastro', {livros:resultados});

          

        })
        
        conexao.end();

        
    })

    app.delete('/cadastro',function(request,response,next){

       
        const conexao= app.config.connectionFactory();
        const produtoDao= new app.repository.produtoDao(conexao);
        console.log(request.body)

        
        produtoDao.deletar(request.body, (error,resultados) => {

                
            if (error) {

                next(error);
                return;
            }
            

        } );
    											
        

        console.log("deletar");
        console.log(request.body);
        produtoDao.listar(function(error, resultados){
            

         

                if (error) {

                    next(error);
                    return;
                }

                response.render('cadastro', {livros:resultados});

          

        })
        
        conexao.end();

        
    })

    app.put('/cadastro',function(request,response,next){

       
        const conexao= app.config.connectionFactory();
        const produtoDao= new app.repository.produtoDao(conexao);
        console.log(request.body)

        
        produtoDao.editar(request.body, (error,resultados) => {

                
            if (error) {

                next(error);
                return;
            }
            

        } );
    											
        

        console.log("put");
        console.log(request.body);
        produtoDao.listar(function(error, resultados){
            

         

                if (error) {

                    next(error);
                    return;
                }

                response.render('cadastro', {livros:resultados});

          

        })
        
        conexao.end();

        
    })

    app.post('/cadastro',function(request,response,next){

        
        request.assert('titulo','Titulo é obrigatório').notEmpty();
        request.assert('preco','O preço é um número').notEmpty();
        request.assert('descricao','A descrição é obrigatória').notEmpty();


        const errors = request.validationErrors();

        if (errors){
            response.format({
                html: () => response.status(400).render('cadastro',{errors})
                ,json: () => response.status(400).json({errors})
            })

            return;
        }

        const conexao= app.config.connectionFactory();
        const produtoDao= new app.repository.produtoDao(conexao);
        console.log(request.body)

        
        produtoDao.cadastrar(request.body, (error,resultados) => {

                
            if (error) {

                next(error);
                return;
            }
            

        } );
    											
        
        produtoDao.listar(function(error, resultados){
            

         

                if (error) {

                    next(error);
                    return;
                }

                response.render('cadastro', {livros:resultados});

          

        })
        
        conexao.end();

        
    })
}