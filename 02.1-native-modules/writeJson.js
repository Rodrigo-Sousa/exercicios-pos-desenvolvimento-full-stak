import {promises as fs} from "fs";

//init();

// Função para leitura e escrever em arquivo JSON

writeReadJson();

async function init (){

    // Try catch, englobando a função
    try{
        // Se der algum erro, já vai cair no catch
        await fs.writeFile("teste-wait.txt", "conteúdo realizando utilizando - async await function");
            
        await fs.appendFile("teste-wait.txt", "\n concatenando conteúdo, ao utilizar async await \n");

        // recebendo o arquivo na variável data
        const data = await fs.readFile("teste-wait.txt","utf-8")
        console.log(data);
        
    } catch (erro){
        console.log(erro);
    }
}

// Função para ler arquivos JSON.

async function writeReadJson(){
    try {
        // Criando um array
        const arrayCarros = ["Gol", "Celta", "Uno", "Fox"];
        // Criado o objeto json, recebendo o conteúdo da variável arrayCarros
        const objetoCarros = 
        {
            carros: arrayCarros
        }


        // // criando um arquivo JSON. Já podendo passar na sequência o conteúdo do arquivo. Um objeto, por exemplo, passando dentro da função JSON.stringify, para que assim, ele crie o objeto em formato json
        // await fs.writeFile("teste.json", JSON.stringify(objetoCarros));

        // // Fazendo a leitura do arquivo. Recebendo o conteúdo dentro de uma variável
        // const dataCar = await fs.readFile("teste.json", "utf-8");
        // // Imprimindo os dados recebidos no console. Desta forma, estou forçando a leitura com o padrão de caracteres. Mas há outra forma, para que ele identifique o arquivo como array.
        // console.log(dataCar);
        // // Para exibir e converter o arquivo JSON.
        // console.log(JSON.parse(dataCar));

        await fs.writeFile("teste.json", JSON.stringify(objetoCarros));
        // Já passando o arquivo direto com a conversão do JSON
        const dataCar = JSON.parse(await fs.readFile("teste.json"));
        dataCar.carros.push("Fit");
        console.log(dataCar);

        // Sobrescrevendo o conteúdo do array, com o conteúdo alterado
        await fs.writeFile("teste.json", JSON.stringify(dataCar));

    } catch (error) {
        console.log(error);
    }
}