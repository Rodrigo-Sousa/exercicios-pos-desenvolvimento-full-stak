// Realizando a utilização das promises, com o alias fs

import {promises as fs} from "fs";


// Utilizando a promises. Utilizando o arrow function

fs.writeFile("teste-arquivo-promises.txt", "conteúdo realizado utilizando a promises").then( () => {

    // Então, caindo aqui, iremos utilizar o appendFile();
    fs.appendFile("teste-arquivo-promises.txt","\n Testando a concatenação dos arquivos, com promises \n").then(()=>{
        // Lendo o arquivo
        fs.readFile("teste-arquivo-promises.txt", "utf-8").then((response)=>{
            // pegando o response da promises
            console.log(response);
        }).catch((erro) => {
            // Mensagem de erros.
            console.log(erro);
        });

    }).catch(()=>{
        console.log("Erro, ao tentar rodar o appendFile");
    });
    
}).catch(() => {
    // Caso dê algum erro.
    console.log(erro);
});


// Para realizarmos a importação, inserir a palavra import, o nome da variável seguida de from entre aspas, o nome do módulo que iremos importar

// fs é o módulo nativo do Node.Js, sendo ele o file system
// import fs from "fs";

// Escrevendo em um arquivo. Se o arquivo que passamos, não existir, esse método criará ele para nós. Como parâmetros, passamos o primeiro, que é o nome do arquivo, e o segundo o conteúdo do arquivo. O terceiro parâmetro é uma callback, ela, no caso do WriteFile, tera um único parâmetro, que é o responsável por erro, caso ocorra.

/* Utilizando callbacks */
// fs.writeFile("teste.txt", "teste, teste, teste, conteúdo do arquivo.", function(err){
//     // Após rodar essa função, ele irá retornar o callback, após escrever o conteúdo dentro do arquivo que passamos.
//     if(err){
//         // Se ocorreu algum erro, irá retornar o erro.
//         console.log(err);
//     }else {
//         // Concatenando o conteúdo do arquivo; Ele adiciona o conteúdo ao final do arquivo.
//         fs.appendFile("teste.txt", "\n teste append file \n", function(err){
//             if(err){
//                 console.log(err);
//             }else{
//                 // se não, resultado que deu ok.
//                 // console.log("Arquivo escrito com sucesso.");
//                 // Realizando leitura do arquivo, como parâmetro, passamos o caminho do arquivo. Passamos a callback, com 2 parâmtros, o erro, e os dados, para leitura, caso dê certo.
//                 fs.readFile("teste.txt", "utf-8", function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//         });
//             }
//         });
//     }
// });

/* Utilizando de forma sincrona*/
// Utilizando o writeFileSync, não precisamos fazer a utilização de callbacks. Utilizando o async await.

// try{
//     fs.writeFileSync("teste-write-file-sync.txt", "conteúdo do arquivo, utilizando o file sync");

//     const data = fs.readFileSync("teste-write-file-sync.txt", "utf-8");

//     console.log(data);
// } catch{
//     console.log(err);
// }

// Devemos evitar trabalhar desta forma em API's, para não travarmos a execução, enquanto não obtem a resposta do que foi solicitado.