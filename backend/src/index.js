// npm: instala um pacote
// npx: executa um pacote

// importa o modulo express para a variavel express, assim a variavel contém todas as funconalidade do express nela;
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// variavel app vai armazenar a aplicação
const app = express();

// informa para o express que está usando json para o corpo das requisições
app.use(express.json());
app.use(routes);
app.use(cors());
/* 
    - pega a rota desejada, no caso '/' pega a rota raiz.
    - () sempre recebe dois parametros: request e response 
    - o que vem dps da / é chamado recurso 
*/

/*
    * Metodos HTTP:
        - Get: buscar/listar alguma informação do back-end;
        - Post: criar uma informação no back-end;
        - Put: alterar alguma info do back-end;
        - Delete: deletar uma info no back-end;
*/

/*
    * Tipos de Parametro:
        - Query Params: parametros nomeados enviados na rota após "?" (filtros,paginação,)
        - Route Params: parametros para identificar recursos (acessa atraves de '.params')
        - Request Body: corpo da requisição, utilizado para criar recursos (acessa atraves do '.body')

*/

// vai ouvir a porta x; 
app.listen(3333);

