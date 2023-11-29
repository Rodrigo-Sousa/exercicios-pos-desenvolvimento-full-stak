// Importando um objeto do módulo Events, não o módulo inteiro
import { EventEmitter } from "events";

// Criando uma variável, par ao nosso objeto importado

const eventEmitter = new EventEmitter();

// Com essa importação e atribuindo o objeto a uma variável, podemos escutar ou emitir eventos, diretamente por ele.

// Informando a nossa variável, e a função .on(), como parâmetro, passamos o nome do nosso evento, e o callback, podemos passar um objeto para ela. Aqui estamos apenas escutando.
eventEmitter.on("testeEvent", objeto =>{
    // Apenas imprimindo o evento, para verificar como está se comportando
    console.log(objeto);
});

// Emitindo o evento. Passando como parâmetro o nome do evento; na sequência, passando uma própriedade, um objeto JSON.

// eventEmitter.emit("testeEvent", "Evento - emitido");

// Exportando o objeto, para utilizarmos em outras partes do projeto

export default eventEmitter;