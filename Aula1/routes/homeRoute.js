const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

let ctrl = new HomeController();

router.get("/", ctrl.home);
router.get("/carros", ctrl.carros);
router.get("/cadastrar", ctrl.cadastrar);
router.post("/cadastrar", ctrl.cadastrarCarro);

module.exports = router;