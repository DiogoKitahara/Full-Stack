const Database = require("../utils/database");

const banco = new Database();

class PaoModel {
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

    async listarPao() {
        let sql = "select * from tb_pao";
        let lista = [];
        let linhas = await banco.ExecutaComando(sql);
        for(let i = 0; i < linhas.length; i++) {
            let linha = linhas[i];
            lista.push(new PaoModel(linha["pao_id"], linha["pao_descricao"]))
        }
        return lista;
    }
}