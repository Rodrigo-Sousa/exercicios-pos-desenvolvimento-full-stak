// Importando o express

import express from "express";

// Criando a instância do express

const app = express();

// Tratamento padrão de erro do express. Mesmo que não tenhamos configurado um tratamento de erro, a api não irá parar, sendo emitido um erro padrão

app.get("/", (req, res)=>{

    // Simulando um erro com throw new Error(); Sendo aqui um tratamento de erro genérico.
    throw new Error("Erro, mensagem de teste");

});

// Função de erro assincrono

app.post("/", async (req, res, next) => {
    // Dentro de uma funçaõ assincrona, usar tudo dentro de um try actch
    try{
        // Erro acontecendo
        throw new Error("Tratamento de erro - async");

    } catch (err) {
        // Passando o erro para a próxima função. Os erros, padrões, que definimos com o app.use
        next(err);
    };
    
});

// Podemos usar a funçaõ .use, que atende a todas as requisições. Podemos utilizar ela para os tratamentos de erro, mas sendo importante deixar ela no final, referente a todas as rotas que estiverem acima dela.

// app.use((err, req, res, next)=>{
//     console.log("Erro 1.");
//     // Passando o estatus da requisição + mensagem a ser enviada
//     res.status(500).send("Ocorreu um erro, tente novamente mais tarde!");
// });

// Passando mais de uma função, para tratamento do erro.
app.use((err, req, res, next)=>{
    console.log("Erro 2.");
    // Passando para o próximo erro. Informando para que a próxima função, trate o erro.
    next(err);
});
app.use((err, req, res, next)=>{
    console.log("Erro 3.");
    // Passando o estatus da requisição + mensagem a ser enviada
    res.status(500).send("Ocorreu um erro, tente novamente mais tarde!");
});
// Usando json
app.use(express.json());

app.listen(3003, ()=>{
    console.log("API para tratamento de erro, iniciado!");
});