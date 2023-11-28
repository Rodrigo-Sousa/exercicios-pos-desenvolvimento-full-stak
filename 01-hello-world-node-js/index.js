// Exibindo uma mensagem no console.

console.log("Hello World!")

// No terminal, estando dentro da pasta, se rodarmos o comando `node index.js`, será apresentando a mensagem "Hello World!"

// process.argv -> Ele devolve um array, sendo o primeiro índice o caminho do arquivo, o segundo o nome do arquivo e o terceiro os parametros inseridos. Podendo utilizar para verificarmos as entradas.

// console.log(process.argv);

// Listar os números multiplos por 3 e 5, menor que 1000.

// const numero = 1000;

// Pegando o parâmetro passado ao executar, convertendo o valor em string para número

const numero = parseInt((process.argv[2]));

// Array, para armazenar todos os números que forem multiplos
const multiplos = [];

for(let i = 0; i <= numero; i++){

    // Comparando se o resto da divisão é igual a 0 (módulo)
    if ((i % 3 === 0) || (i % 5 === 0)){
        // Se a condição for verdadeira, inserir o resultado dentro do array multiplos
        multiplos.push(i);
    }
}

// Imprimindo o array contendo os múltiplos.
console.log(multiplos);