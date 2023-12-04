// Importando o express
import express from "express";

// Importando o router que criamos

import router from "./carrosRouter.js";

// Variável para instaciarmos o express, associando ela a variável app

const app = express();

// Utilizando o json

app.use(express.json());

// Tudo o que for /carros, redirecionar para o router
app.use("/carros", router);

// Utilizando em toda a requisição que recebermos .use, já podendo inserir a callback direto.

app.use((req, res, next)=>{
    // Imprimindo no console a data que está sendo executado
    console.log(new Date());
    // Jogando para a próxima requisição
    next();
});

// Rota, associada a aplicação

app.get("/teste", (req, res) =>{
    // res.send("Testando rota - middlewares");
    res.end();
});

app.listen(3002, ()=>{
    console.log("Servidor está rodando - Teste de middlewares");
});