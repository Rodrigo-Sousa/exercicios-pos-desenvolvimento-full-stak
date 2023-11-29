// Importando o Express
import express from "express";

const app = express();

// app.get("/", (req, res)=>{
//     res.send("Hello World - Aprimorando Rotas");
// });

// Trabalhamos com rotas, utilizando o método .all(), e passando dentro dele, os endpoints que forem necessários

app.all("/testAll", (req, res)=>{
    // Pegando a própriedade do método req, e enviando direto como resposta.
    res.send(req.method);
});

// Definindo alguns caractéres especiais para as nossas rotas:

// ? ele faz com que, a última letra junto dela, seja opcional

app.get("/teste?", (req, res)=>{
    res.send("Teste de rota com o caracter ? na requisição");
});

// + indicando que a letra próximo ao +, pode ser repetida diversas vezes na requisião

app.get("/buzz+", (_,res)=>{
    res.send("Teste de rota com o caracter + na requisição");
});

app.listen(3001, ()=>{
    console.log("API de Rotas Aprimoradas iniciado com Sucesso!");
});