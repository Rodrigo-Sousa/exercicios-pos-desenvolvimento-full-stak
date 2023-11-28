# Utilização sobre os Módulos no Node.JS

Nesta aula, iremos criar e importar os módulos. 

Uma das formas para importação é: 
```javascript

// Importando com require. Importado o objeto
const operacao = require("./operacoesMatematicas.js");

```

Essa forma funciona, mas há a forma mais recente, o _import_ e _export_. Sendo até a mais recomendada. Ao utilizarmos esse tipo de importação e exportação. Precisamos informar isso no arquivo _package.json_: Adicionando está linha de comando: `"type": "module"`