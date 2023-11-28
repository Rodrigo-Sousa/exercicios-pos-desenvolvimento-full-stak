// Importação de com required

const operacao = require("./operacoesMatematicas.js")

const operacaoMatematica = require('./operacoesMateticas2.js');

// Exibindo no console, as importações, com a forma antiga (require).

console.log(operacao.soma(5,10));
console.log(operacao.subtracao(40,2));
console.log(operacao.nome)

console.log(operacaoMatematica(30,4));