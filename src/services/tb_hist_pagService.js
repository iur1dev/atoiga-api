const db = require("./db");
module.exports = {
  buscarHist_pag: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT id_hist_pag, id_valores, CONCAT('R$', REPLACE(FORMAT(valor_pago, 2),'.',',')) AS valor_pago, date_format(dt_criacao, '%d/%m/%Y') AS dt_criacao FROM tb_hist_pag WHERE id_valores = ? ORDER BY id_hist_pag DESC",
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

  buscarHist_pag2: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor_pago) AS valor_pago FROM tb_hist_pag WHERE dt_criacao = '2023/03/24'",
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

  selectBuscarTodosRecebidos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor_pago) AS valor_pago FROM tb_hist_pag",
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

  inserirHist_pag: (id, valor_pago) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_hist_pag (id_valores, valor_pago) VALUES(?,?)",
        [id, valor_pago],
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

  deletarHist_pag: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM tb_hist_pag WHERE id_hist_pag = ?",
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
