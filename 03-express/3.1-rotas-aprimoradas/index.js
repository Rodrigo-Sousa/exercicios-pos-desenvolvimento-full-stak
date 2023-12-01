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


app.listen(3001, ()=>{
    console.log("API de Rotas Aprimoradas iniciado com Sucesso!");
});