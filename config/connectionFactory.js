


function connectionFactory (){
    const mysql=require('mysql');

    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'casadocodigo_8010'
    });

     
}

module.exports = () => connectionFactory;