# Anotações, para auxiliar na hora de utilizar o projeto.

Dentro desta basta, abrir a mesma pelo terminal de sua preferência e rodar o comando `npm init -y`. O Parâmetro _-y_, insere uma resposta _yes_, para tudo o que seria questionado se rodarmos o comando sem o -y.

Exemplo de como irá ficar no terminal: `01-hello-world-node-js> npm init`

Observar que o arquivo [**_package.json_**](./package.json) foi criado na pasta, e o terminal, terá devolvido uma mensagem parecido com esse objeto:

```javascript

01-hello-world-node-js\package.json:

{
  "name": "01-hello-world-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

Com o arquivo _package.json_, já temos um projeto **Node.js**.

Para rodarmos, iremos criar um arquivo, como decidimos que o nosso ponto de entrada será o arquivo [**index.js**](./index.js), conforme está declarado na nossa linha 17 do _package.json_, basta criarmos um arquivo na raiz da nossa pasta com esse nome e extensão.