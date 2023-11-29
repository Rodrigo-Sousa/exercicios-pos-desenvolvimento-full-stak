// Para realizarmos a importação, inserir a palavra import, o nome da variável seguida de from entre aspas, o nome do módulo que iremos importar

// fs é o módulo nativo do Node.Js, sendo ele o file system
import fs from "fs";

// Escrevendo em um arquivo. Se o arquivo que passamos, não existir, esse método criará ele para nós. Como parâmetros, passamos o primeiro, que é o nome do arquivo, e o segundo o conteúdo do arquivo. O terceiro parâmetro é uma callback, ela, no caso do WriteFile, tera um único parâmetro, que é o responsável por erro, caso ocorra.

fs.writeFile("teste.txt", "teste, teste, teste, conteúdo do arquivo.", function(err){
    // Após rodar essa função, ele irá retornar o callback, após escrever o conteúdo dentro do arquivo que passamos.
    if(err){
        // Se ocorreu algum erro, irá retornar o erro.
        console.log(err);
    }else {
        // se não, resultado que deu ok.
        console.log("Arquivo escrito com sucesso.");
    }
});