// Podemos exportar uma variável

const nome = "Teste de exportação - Variável";

// Módulo, pode ter os códigos aqui, iremos neste ter uma função

function soma(numero1, numero2){
    // Retornando o resultado da soma, dos 2 números
    return numero1 + numero2;
}

// Função de subtração

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

// Nova forma de exportar o módulo, em formato de objeto

export default {soma, subtracao, nome};