const db = require("./db");
module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT id_cli, nome, date_format(dt_criacao, '%d/%m/%Y') as dt_criacao FROM tb_bl",
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

  inserirClientes: (id_cli, nome) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_bl (id_cli, nome) VALUES(?, ?)",
        [id_cli, nome],
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

  //   deletarClientes: (id) => {
  //     return new Promise((aceito, rejeitado) => {
  //       db.query(
  //         "DELETE FROM tb_cli WHERE id_cli = ?",
  //         [id],
  //         (error, results) => {
  //           if (error) {
  //             rejeitado(error);
  //             return;
  //           }
  //           aceito(results);
  //         }
  //       );
  //     });
  //   },
};
