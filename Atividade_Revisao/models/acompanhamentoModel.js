const Database = require("../utils/database");

const banco = new Database();

class AcompanhamentoModel {
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

    async listarAcompanhamento() {
        let sql = "select * from tb_acompanhamento";
        let lista = [];
        let linhas = await banco.ExecutaComando(sql);
        for(let i = 0; i < linhas.length; i++) {
            let linha = linhas[i];
            lista.push(new AcompanhamentoModel(linha["acompanhamento_id"], linha["acompanhamento_descricao"]))
        }
        return lista;
    }
}