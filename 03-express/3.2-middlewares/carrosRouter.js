// Importando o Express
import express from "express";

// Criando uma variável, para ser o router

const router = express.Router();

// Podenos anexar a instância das nossas rotas

router.get("/",(req, res)=>{
    console.log("GET /carros");
    // Finalizando a requisição
    res.end();
});

router.get("/precos", (req, res)=>{
    console.log("GET /carros/precos");
    res.send("Rota GET /carros/precos");
});

// Exportando o módulo do roteador 

export default router;