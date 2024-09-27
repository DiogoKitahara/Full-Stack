const Database = require("../utils/database");

const banco = new Database();

class QueijoModel {
    #id;
    #descricao;

    constructor (id, descricao) {
        this.#id = id;
        this.#descricao = descricao;
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(descricao) {
        this.#descricao = descricao
    }

    async listarQueijo() {
        let sql = "select * from tb_queijo";
        let lista = [];
        let linhas = await banco.ExecutaComando(sql);
        for(let i = 0; i < linhas.length; i++) {
            let linha = linhas[i];
            lista.push(new PaoModel(linha["queijo_id"], linha["queijo_descricao"]))
        }
        return lista;
    }
}