// Importando as funções
import operacaoMatematicaExport from "./import-export/operacoesMatematicasExport.js";

// Importando um módulo específico.
import multiplicacao from "./import-export/operacoesMateticas2Export.js";

// Importando a função nomeada, informando o que desejamos.

import {divisao, resto} from "./import-export/operacaoMatematicaNomeada.js"

// Importação de com required

// const operacao = require("./operacoesMatematicas.js");

// const operacaoMatematica = require('./operacoesMateticas2.js');

// Exibindo no console, as importações, com a forma antiga (require).

// console.log(operacao.soma(5,10));
// console.log(operacao.subtracao(40,2));
// console.log(operacao.nome)

// console.log(operacaoMatematica(30,4));


// Para utilizar o módulo importado, basta após realizado a importação, selecionar ele, junto com o .nomeDaFuncaoDesejada.
console.log(operacaoMatematicaExport.soma(4,6));

// Exibindo a variável importada
console.log(operacaoMatematicaExport.nome);

// Fazendo o importação de forma mais atual:

console.log(multiplicacao(30,10));

// Trazendo a função nomeadas.

console.log(divisao(10,2));

console.log(resto(10,3));