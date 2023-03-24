const db = require("./db");
module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM tb_cli ORDER BY id_cli DESC",
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

  buscarClientes: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "select id_cli, nome, cel from tb_cli where id_cli LIKE ? OR nome LIKE ? ORDER BY id_cli",
        [id, id],
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

  buscarClientes2: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "select id_cli, nome, data_nasc, rg, cpf, tel, cel, cep_cli, num_cli, rua_cli, bairro_cli, cidade_cli, empresa, cep_empr, num_empr, rua_empr, bairro_empr, cidade_empr, date_format(dt_criacao, '%d/%m/%Y %H:%i:%s') as dt_criacao, date_format(dt_att, '%d/%m/%Y %H:%i:%s') as dt_att from tb_cli where id_cli = ?",
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

  valorTotal: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT SUM(valor) as valor FROM tb_cli WHERE id_cli = ?",
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

  inserirClientes: (
    nome,
    data_nasc,
    rg,
    cpf,
    tel,
    cel,
    cep_cli,
    num_cli,
    rua_cli,
    bairro_cli,
    cidade_cli,
    empresa,
    cep_empr,
    num_empr,
    rua_empr,
    bairro_empr,
    cidade_empr
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_cli (nome, data_nasc, rg, cpf, tel, cel, cep_cli, num_cli, rua_cli, bairro_cli, cidade_cli, empresa, cep_empr, num_empr, rua_empr, bairro_empr, cidade_empr) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          nome,
          data_nasc,
          rg,
          cpf,
          tel,
          cel,
          cep_cli,
          num_cli,
          rua_cli,
          bairro_cli,
          cidade_cli,
          empresa,
          cep_empr,
          num_empr,
          rua_empr,
          bairro_empr,
          cidade_empr,
        ],
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

  atualizarClientes: (
    nome,
    data_nasc,
    rg,
    cpf,
    tel,
    cel,
    cep_cli,
    num_cli,
    rua_cli,
    bairro_cli,
    cidade_cli,
    empresa,
    cep_empr,
    num_empr,
    rua_empr,
    bairro_empr,
    cidade_empr,
    id
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE tb_cli SET nome = ?, data_nasc = ?, rg = ?, cpf = ?, tel = ?, cel = ?, cep_cli = ?, num_cli = ?, rua_cli = ?, bairro_cli = ?, cidade_cli = ?, empresa = ?, cep_empr = ?, num_empr = ?, rua_empr = ?, bairro_empr = ?, cidade_empr = ? WHERE id_cli = ?",
        [
          nome,
          data_nasc,
          rg,
          cpf,
          tel,
          cel,
          cep_cli,
          num_cli,
          rua_cli,
          bairro_cli,
          cidade_cli,
          empresa,
          cep_empr,
          num_empr,
          rua_empr,
          bairro_empr,
          cidade_empr,
          id,
        ],
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

  atualizarValor: (valor, id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE tb_cli SET valor = valor + ? * 1.3 WHERE id_cli = ?",
        [valor, id],
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

  atualizarValor2: (valor, id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE tb_cli SET valor = valor - ? WHERE id_cli = ?",
        [valor, id],
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

  deletarClientes: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM tb_cli WHERE id_cli = ?",
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
