// Importando o Express
import express from "express";

const app = express();

// Informando na instância do express que iremos trabalhar com arquivos JSON (quando passado o corpo pela requisição)
app.use(express.json());

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

// + indicando que a letra próximo ao +, pode ser repetida diversas vezes na requisião a última letra

app.get("/buzz+", (_,res)=>{
    res.send("Teste de rota com o caracter + na requisição");
});

// O símbolo de *, que funciona como um coringa, tudo o que você colocar naquela posição, irá funcionar.

app.get("/one*Blue", (_,res)=>{
    res.send("Testando a rota com o caracter *, servindo como coringa.");
});

// A string que estiver entre os parênteses, é tratada, como unidade. Podendo até juntar outros elementos.

app.post("/test(ing)?", (req, res)=>{
    // Pegando o conteúdo do corpo, após a requisição
    console.log(req.body);
    res.send("Teste de rota com o caracter ? na requisição");
});

// Expressões regulares. Podendo expressar várias string's que irão bater na nossa rota. Para a expressão regular, não fica entre aspas, mas sim, iniciando e finalizando com uma barra

app.get(/.*Regular$/, (req, res)=>{
    res.send("Respondendo a expressão regular; tudo que vinher acompanhado da palavra Regular");
});

// Rotas com parâmetros

app.get("/testeParametros/:id",(req,res)=>{
    // Na resposta, passando o parametro que venho na requisição, o nome aqui, passamos como parâmetros o id
    res.send(req.params.id);
});

// Parâmetro opcional, basta inserirmos o caracter de interrogação
app.get("/testeParametros/:id/:a?",(req,res)=>{
    res.send(req.params.id);
});

// Parâmetros via query
app.get("/testQuery",(req,res)=>{
    // Recebendo os valores da requisição, pela query (consulta).
    // Imprimindo a req.query no browser.
    res.send(req.query);
});

// Utilizando o parâmetro next, para que mais de uma função seja rodada naquela requisição.

app.get("/testeDiversosManipuladores", (req, res, next)=>{
    console.log("Callback 1");
    // Assim, tiramos o fluxo da função atual, e passamos para a próxima
    next();
},
    // Inserindo a próxima função
    (req, res)=>{
        console.log("Callback 2");
        // retornando uma resposta para o usuário. Para poder finalizar a requisição
        res.send("Validado a requisição multipla");
        // Finaliznado, sem retornar mensagem res.end();
    }

);

// Podemos passar o next com array

// Funções soltas.
const callback1 = (req, res, next =>{
    console.log("Callback 1");
    next();
});

// callback criado como function

function callback2 (req, res, next) {
    console.log("Callback 2");
    next();
}

const callback3 = (req, res ) =>{
    console.log("Callback3");
    res.end();
}

// Criando rotas, para consumir as funções que declaramos.

app.get("/testeDiversosMultiplicadoresArray", [callback1, callback2, callback3]);

app.listen(3001, ()=>{
    console.log("API de Rotas Aprimoradas iniciado com Sucesso!");
});