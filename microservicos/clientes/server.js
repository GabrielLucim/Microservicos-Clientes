const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "Microserviço de Clientes funcionando"
    });
});

app.listen(3003, () => {
    console.log("Clientes rodando na porta 3003");
});
