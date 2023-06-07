const express = require("express");
const app = express();

//Indicamos que o express deve considerar o body das requisições como json
app.use(express.json())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

//Lista de heróis
const herois =  ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

//Read All - [GET] /herois
app.get("/herois", function (req, res) {
    res.send(herois)
})

//Create - [POST] /herois
app.post("/herois", function (req, res) {
    console.log(req.body, typeof req.body)

    const nome = req.body.nome

    herois.push(...nome)

    res.send("Um item foi criado")
})

//Read By ID - [GET] /herois/:id
app.get("/herois/:id", function(req, res) {
    const id = req.params.id;
    
    const item = herois[id - 1];
    
    res.send(item)
})
  
app.listen(3000, function () {
  console.log("Aplicando rodando em http://localhost:3000");
});

