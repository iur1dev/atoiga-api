const db = require("./db");
module.exports = {
  buscarJuros: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM tb_juros", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  atualizarJuros: (juros) => {
    return new Promise((aceito, rejeitado) => {
      db.query("UPDATE tb_juros SET juros = ?", [juros], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
};
