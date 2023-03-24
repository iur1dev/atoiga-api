const admService = require("../services/tb_admService");
module.exports = {
  buscarAdm: async (req, res) => {
    let json = { erro: "", result: [] };
    let login = req.params.login;
    let senha = req.params.senha;
    let adm = await admService.buscarAdm(login, senha);

    if (adm) {
      json.result = adm;
    }

    res.json(json);
  },
};
