const db = require("./db");
module.exports = {
  buscarValores: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT id_valores, id_cli, REPLACE(FORMAT(valor_pego, 2), '.', ',') AS valor_pego, valor_devido, date_format(dt_criacao, '%d/%m/%Y') AS dt_criacao FROM tb_valores WHERE id_cli = " +
          id +
          " ORDER BY id_valores DESC",
        [id],
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

  buscarValor: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor_pego) AS valor_pego FROM tb_valores WHERE id_cli =" +
          id,
        [id],
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

  buscarValorTotal: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor_pego) AS valor_pego FROM tb_valores",
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

  buscarEnviado: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor_pego ) AS valor_pego FROM tb_valores WHERE dt_criacao = '2023-03-24'",
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

  inserirValores: (id_cli, valor_pego, valor_devido) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_valores (id_cli, valor_pego, valor_devido) VALUES(?,?,?);",
        [id_cli, valor_pego, valor_devido, id_cli],
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

  insertEnviado: (id_cli, valor_pego) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_valores (id_cli, valor_pego) VALUES(?,?)",
        [id_cli, valor_pego],
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

  deletarValores: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM tb_valores WHERE id_valores = ?",
        [id],
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
