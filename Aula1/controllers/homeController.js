const { on } = require("events");

const listaCarros = ['Fusca', 'Corolla', 'Palio', 'Monza'];

class HomeController {
    home (req, res) {
        res.render("home.ejs");
    }
    carros (req, res) {
        res.render("carros.ejs", {"carros":listaCarros});
    }
    cadastrar (req, res) {
        res.render("cadastro.ejs",)
    }
    cadastrarCarro(req, res) {
        const nome = req.body.nome;
        const carro = req.body.carro;
        listaCarros.push(carro);
        res.render('carros.ejs', {'carros':listaCarros});
    }
}

module.exports = HomeController;