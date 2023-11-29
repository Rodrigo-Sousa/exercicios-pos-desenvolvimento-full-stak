// Importando esse módulo nativo do Node
import { Console, log } from "console";
import readline from "readline";

// Criando uma interface de comunicação. Criando uma variável e armazenando o conteúdo da criação da interface, via método direto do módulo
const rl =  readline.createInterface({
    // Passando um objeto, com o input e o output. 
    // Entrada de dados, pelo terminal
    input: process.stdin,
    // Saída de dados, pelo terminal
    output: process.stdout
});

// Chamando a função
pergunta();

// Criando uma função, para sempre perguntar ao usuário

function pergunta(){
    // Com a interface criada, realizando uma pergunta, pelo prompt.

    rl.question("Digite um número: ", numero => {
        // // exibindo o número digitado, utilizando uma callback
        // console.log(numero);
        // // Encerrando o programa.
        // // rl.close();
        // // Chamando a pergunta

        // Condição se o número for -1, fechar o programa
        if(parseInt(numero) === -1){
            rl.close();
        }else {
            // Verificando o multiplos dos números por 3 e 5, com base no valor informado
        const multiplos = [];
        for(let i = 3; i<= parseInt(numero); i++){
            if((i % 3 === 0) || (i % 5 === 0)){
                multiplos.push(i);
            }
        }

        // Imprimindo no console o resultado do programa
        console.log(multiplos);

        pergunta();
        }
        
    });
}