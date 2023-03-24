const Tb_jurosService = require("../services/tb_jurosService");
module.exports = {
  buscarJuros: async (req, res) => {
    let json = { erro: "", result: [] };
    let juros = await Tb_jurosService.buscarJuros();

    for (let i in juros) {
      json.result.push({
        juros: juros[i].juros,
      });
    }
    res.json(json);
  },

  atualizarJuros: async (req, res) => {
    let json = { erro: "", result: [] };
    let juros = req.body.juros;

    let juross = await Tb_jurosService.atualizarJuros(juros);

    if (juross) {
      json.result = juross;
    }
    res.json(json);
  },
};
