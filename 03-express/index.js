// Importando o express para o nosso arquivo
import express from "express";

// Criando uma instância dele. Chamando o método express e popuplando ela dentro da variável app

const app = express();

// Realizando a configuração das rotas. Mostrando para qual caminho o nosso express irá responder cada requisição.

app.get("/", (req, res)=>{
    // Configurando a rota para resposta
    res.send("Hello World!");
});

// Método POST, deixando o método para o caminho raiz da página

app.post("/", (req, res)=>{
    res.send("Hello World - Método POST");
});


// Iniciando o servidor

app.listen(3000, ()=>{
    console.log("API conectada com sucesso!")
});