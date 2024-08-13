const express = require("express");
const porta = 5000;
const routerHome = require("./routes/homeRoute");
const app = express();

//especificar como o servidor irá processar os parâmetros da requisição
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use("/", routerHome);

app.listen(porta, function() {
    console.log("servidor web em funcionamento");
});