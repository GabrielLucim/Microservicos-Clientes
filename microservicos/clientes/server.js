const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.json({
            mensagem: "Microserviço de Clientes funcionando"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            erro: "Erro ao conectar com o banco de dados"
        });
    }
});

app.listen(3003, () => {
    console.log("Clientes rodando na porta 3003");
});
