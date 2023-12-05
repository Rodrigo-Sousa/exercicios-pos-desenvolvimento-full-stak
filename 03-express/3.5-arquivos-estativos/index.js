import express from "express";

const app = express();

app.use(express.json());

// Utilizando o express.static, informando a pasta na qual iremos utilizar
app.use(express.static("public"));

// Digitando essa rota: http://localhost:3005/node-js.png, iremos conseguir exibir a imagem

// Informando a rota, que servirá o arquivo, em um caminho virtual
app.use("/imagens", express.static("public"));

app.listen(3005, () =>{
    console.log("API - Testando arquivos estáticos.");
});