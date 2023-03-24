const db = require("./db");
module.exports = {
  buscarAdm: (login, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM tb_adm WHERE login = ? AND senha = ?",
        [login, senha],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
