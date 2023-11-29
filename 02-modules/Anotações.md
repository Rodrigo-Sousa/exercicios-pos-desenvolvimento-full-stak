# Utilização sobre os Módulos no Node.JS

Nesta aula, iremos criar e importar os módulos.

Uma das formas para importação é:

```javascript
// Importando com require. Importado o objeto
const operacao = require("./operacoesMatematicas.js");
```

Essa forma funciona, mas há a forma mais recente, o _import_ e _export_. Sendo até a mais recomendada. Ao utilizarmos esse tipo de importação e exportação. Precisamos informar isso no arquivo _package.json_: Adicionando está linha de comando: `"type": "module"`

---

Módulos nativos do Node.Js, sendo abordado o _file system_. Essa bíblioteca é responsável por leitura e escrita em arquivos.

[Native Modules](../02.1-native-modules/)

Dentro deste diretório, rodamos o comando `npm init -y`.

Criamos o arquivo **index.js**

Daqui em diante, iremos utilizar o jeito mais novo para trabalharmos com os módulos.

Realizando a leitura do arquivo:

```javascript
import fs from "fs";

fs.writeFile(
  "teste.txt",
  "teste, teste, teste, conteúdo do arquivo.",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      fs.readFile("teste.txt", function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  }
);
```

No terminal, ao rodarmos o arquivo, será apresentando o _buffer_ do arquivo. `<Buffer 74 65 73 74 65 2c 20 74 65 73 74 65 2c 20 74 65 73 74 65 2c 20 63 6f 6e 74 65 c3 ba 64 6f 20 64 6f 20 61 72 71 75 69 76 6f 2e>`. No qual ele imprime como bit, não como texto. Para corrigirmos isso, basta informamos qual é a formatação que utilizamos no nosso arquivo: `fs.readFile("teste.txt", "utf-8", function(err, data)`.

---

Leitura e escrita em conteúdos JSON.

[Escritas e leituras - Arquivos JSON](../02.1-native-modules/writeJson.js)

---

Interação do usuário com o programa, por linha de comando, no terminal.

[Readline](../02.1-native-modules/readline/)

---

Events, módulo nativo, no qual podemos emitir e escutar eventos.

[Events](../02.1-native-modules/events/)

Podemos trabalhar e chamar os eventos, em diversos arquivos.

---

**HTTP**, módulo nativo, para podermos criar um servidor, que pode receber requisições (solicitações). O _Express_ faz isso também, mas de forma muito mais preparada, mas pelo Node, há esse módulo, que conseguimos realizar também.
