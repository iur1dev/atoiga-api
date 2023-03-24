const Tb_hist_pagService = require("../services/tb_hist_pagService");
module.exports = {
  buscarHist_pag: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let historico = await Tb_hist_pagService.buscarHist_pag(id);

    if (historico) {
      json.result = historico;
    }
    res.json(json);
  },

  buscarHist_pag2: async (req, res) => {
    let json = { erro: "", result: [] };
    let historico = await Tb_hist_pagService.buscarHist_pag2();

    if (historico) {
      json.result = historico;
    }
    res.json(json);
  },

  selectBuscarTodosRecebidos: async (req, res) => {
    let json = { erro: "", result: [] };
    let historico = await Tb_hist_pagService.selectBuscarTodosRecebidos();

    if (historico) {
      json.result = historico;
    }
    res.json(json);
  },

  inserirHist_pag: async (req, res) => {
    let json = { erro: "", result: [] };
    let id_valores = req.body.id_valores;
    let valor_pago = req.body.valor_pago;

    let historico = await Tb_hist_pagService.inserirHist_pag(
      id_valores,
      valor_pago
    );

    if (historico) {
      json.result = historico;
    }
    res.json(json);
  },

  deletarHist_pag: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;

    let historico = await Tb_hist_pagService.deletarHist_pag(id);

    if (historico) {
      json.result = historico;
    }
    res.json(json);
  },
};
