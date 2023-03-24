const Tb_valoresService = require("../services/tb_valoresService");
module.exports = {
  buscarValores: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let valores = await Tb_valoresService.buscarValores(id);

    for (let i in valores) {
      json.result.push({
        idValores: valores[i].id_valores,
        idCli: valores[i].id_cli,
        valorPego: valores[i].valor_pego,
        valorDevido: valores[i].valor_devido,
        dtCriacao: valores[i].dt_criacao,
      });
    }
    res.json(json);
  },

  buscarValor: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let valores = await Tb_valoresService.buscarValor(id);

    for (let i in valores) {
      json.result.push({
        idValores: valores[i].id_valores,
        idCli: valores[i].id_cli,
        valorPego: valores[i].valor_pego,
        valorDevido: valores[i].valor_devido,
        dtCriacao: valores[i].dt_criacao,
      });
    }
    res.json(json);
  },

  buscarValorTotal: async (req, res) => {
    let json = { erro: "", result: [] };
    let valores = await Tb_valoresService.buscarValorTotal();

    for (let i in valores) {
      json.result.push({
        idValores: valores[i].id_valores,
        idCli: valores[i].id_cli,
        valorPego: valores[i].valor_pego,
        valorDevido: valores[i].valor_devido,
        dtCriacao: valores[i].dt_criacao,
      });
    }
    res.json(json);
  },

  buscarEnviado: async (req, res) => {
    let json = { erro: "", result: [] };
    let valores = await Tb_valoresService.buscarEnviado();

    for (let i in valores) {
      json.result.push({
        idValores: valores[i].id_valores,
        idCli: valores[i].id_cli,
        valorPego: valores[i].valor_pego,
        valorDevido: valores[i].valor_devido,
        dtCriacao: valores[i].dt_criacao,
      });
    }
    res.json(json);
  },

  inserirValores: async (req, res) => {
    let json = { erro: "", result: [] };
    let id_cli = req.body.id_cli;
    let valor_pego = req.body.valor_pego;
    let valor_devido = req.body.valor_devido;

    let valores = await Tb_valoresService.inserirValores(
      id_cli,
      valor_pego,
      valor_devido
    );

    if (valores) {
      json.result = valores;
    }
    res.json(json);
  },

  insertEnviado: async (req, res) => {
    let json = { erro: "", result: [] };
    let id_cli = req.body.id_cli;
    let valor_pego = req.body.valor_pego;

    let valores = await Tb_valoresService.insertEnviado(id_cli, valor_pego);

    if (valores) {
      json.result = valores;
    }
    res.json(json);
  },

  deletarValores: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;

    let valores = await Tb_valoresService.deletarValores(id);

    if (valores) {
      json.result = valores;
    }
    res.json(json);
  },
};
