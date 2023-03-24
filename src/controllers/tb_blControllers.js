const tb_blService = require("../services/tb_blService");
module.exports = {
  buscartodos: async (req, res) => {
    let json = { erro: "", result: [] };
    let clientes = await tb_blService.buscarTodos();

    for (let i in clientes) {
      json.result.push({
        id_cli: clientes[i].id_cli,
        nome: clientes[i].nome,
        dt_criacao: clientes[i].dt_criacao,
      });
    }
    res.json(json);
  },

  inserirClientes: async (req, res) => {
    let json = { erro: "", result: [] };
    let id_cli = req.body.id_cli;
    let nome = req.body.nome;

    let cliente = await tb_blService.inserirClientes(id_cli, nome);

    if (cliente) {
      json.result = cliente;
    }
    res.json(json);
  },

  //   deletarClientes: async (req, res) => {
  //     let json = { erro: "", result: [] };
  //     let id = req.params.id;

  //     let clientes = await AtoigaService.deletarClientes(id);

  //     if (clientes) {
  //       json.result = clientes;
  //     }
  //     res.json(json);
  //   },
};
