import express from "express";
// Importando o winston

import winston from "winston";

const app = express();

app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;

// Definindo o formato, para utilizarmos dentro do winston
const meuFormato = printf((// Formato, como serão impressos.
    
    {level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level} : ${message}`
    }
    
    
);

// Criando o log, apartir da função do winston, inserindo o conteúdo dentro de uma variável

const logger = winston.createLogger(
    // Passando o objeto JSON, com as configurações que desejamos passar
    {
        // Nível da aplicação
        level: "silly",
        // Para aonde desejamos que o nosso log vá,  Ex: para o console e um arquivo texto. 
        transports: [
            new(winston.transports.Console)(),
            new(winston.transports.File)(
                // configurando o nome que desejamos que o arquivo vá possuir
                {filename: "meus-logs.log"}
            )
        ],
        // Formato de impressão do arquivo
        format: //Combinando o formato para ser impresso
        combine(
            label(
                // Label da aplicação
                {label: "Meu projeto"}
            ),
            timestamp(),
            meuFormato
        )
    }
);

logger.error("Log de erro"),
logger.warn("Log de alerta"),
logger.info("Log de informação"),
logger.verbose("Log do tipo verbose"),
logger.debug("Log com o tipo de degub")
logger.silly("Log do tipo silly")

logger.log("info", "Olá com parametros!");

app.get("/",(req, res) => {
    res.send("Validando a rota GET.");
});

app.listen(3004, (req, res, next) =>{
    console.log("API para verificar gravação de logs.");
});