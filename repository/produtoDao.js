class ProdutoDao {

    constructor(_conexao){


        this.conexao=_conexao;

    }

    


    listar(callback){
        this.conexao.query('SELECT * FROM livros',callback);


    }


    cadastrar(livro,callback){

        //var livroParse=JSON.parse(livro);

        
        this.conexao.query(`INSERT INTO livros (titulo,preco,descricao) VALUES ('${livro.titulo}','${livro.preco}', '${livro.descricao}')`,callback);
    }


    deletar(json,callback){

        //var livroParse=JSON.parse(livro);

        
        this.conexao.query(`DELETE FROM livros WHERE id=${json.id}`,callback);
    }

    editar(json,callback){

        //var livroParse=JSON.parse(livro);

        
        this.conexao.query(`UPDATE livros SET titulo='${json.titulo}', preco='${json.preco}', descricao='${json.descricao}' WHERE  id=${json.id}`,callback);
    }



}

module.exports = () => ProdutoDao;
























/*function Produto(titulo, preco, descricao){
    this._titulo=titulo;
    this._preco=preco;
    this._descricao=descricao;

    return{
        titulo: this._titulo,
        preco: this._preco,
        descricao: this._descricacao
    }

}

let livro= new Produto('Cleancode',2323, 'codigo limpo');

Produto.prototype.listar = function(){
    return{
        titulo: this._titulo,
        preco: this._preco,
        descricao: this._descricacao
    }

}

Produto.prototype.isbn=2432243;

*/