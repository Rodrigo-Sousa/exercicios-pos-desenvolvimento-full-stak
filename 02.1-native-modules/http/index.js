// Importando o módulo
import http from "http";

// Criando o servidor. Esse método, recebe uma callback, que irá tratar elas, e devolver a requisição

http.createServer((req, res)=>{
    // // Desta forma, toda a requisição será respondida.
    // // req = request (contém todos os dados da requisição, Ex: http, algum parâmetro que o usuário enviar, etc.) | res = response (Sempre que formos responder a uma requisição, o que formos enviar de volta para o usuário/página)
    // // Respondendo na tela do usuário. Toda requisição que chegar
    // res.write("Hello World!");
    // // Status da resposta
    // res.statusCode = 200;
    // // Encerrando a requisição
    // res.end();

    /* Tratando o tipo de requisição */
    
    if((req.method === "GET") && (req.url === "/teste")){
        res.write("Get /teste realizado com sucesso!");
    }else{
        res.write("Hello World");
    }
    // Status da resposta
    res.statusCode = 200;
    // Encerrando a requisição
    res.end();


    // Pegando a resposta da variável, e retornando o método listen, na porta 8080 (neste caso).
}).listen(8080);