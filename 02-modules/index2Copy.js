// Importando um módulo específico.
import multiplicacao from "./import-export/operacoesMateticas2Export.js";

import {divisao, resto} from "./import-export/operacaoMatematicaNomeada.js";

import operacao from "./import-export/operacoesMatematicasExport.js";

console.log(multiplicacao(10,3));

console.log(divisao(10,2));

console.log(resto(10,3));

console.log(operacao.soma(10,4));