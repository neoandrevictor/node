const http = require('http');



const server = http.createServer(function(request,response){
    
    
    if (request.url=="/"){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        let index='<h1>Bem Vindo</h1>';
        response.end(index);
    } 
    if (request.url=="/produtos"){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        let produtos='<h1>Produtos</h1>';
        response.end(produtos);
    }
    if (request.url=="/json"){
        response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
        let dados={ 
            escola:'Caelum',
            cidade:'São Paulo'
        }
        response.end(JSON.stringify(dados));
    }          
    console.log('pagina requisitada:'+request.url);
        

});
server.listen(3000,'localhost');
console.log('Servidor executando no http://localhost:3000');
