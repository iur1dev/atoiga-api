const AtoigaService = require("../services/AtoigaService");
module.exports = {
  buscartodos: async (req, res) => {
    let json = { erro: "", result: [] };
    let clientes = await AtoigaService.buscarTodos();

    for (let i in clientes) {
      json.result.push({
        id: clientes[i].id_cli,
        nome: clientes[i].nome,
        data_nasc: clientes[i].data_nasc,
        rg: clientes[i].rg,
        cpf: clientes[i].cpf,
        tel: clientes[i].tel,
        cel: clientes[i].cel,
        cep_cli: clientes[i].cep_cli,
        num_cli: clientes[i].num_cli,
        rua_cli: clientes[i].rua_cli,
        bairro_cli: clientes[i].bairro_cli,
        cidade_cli: clientes[i].cidade_cli,
        empresa: clientes[i].empresa,
        cep_empr: clientes[i].cep_empr,
        num_empr: clientes[i].num_empr,
        rua_empr: clientes[i].rua_empr,
        bairro_empr: clientes[i].bairro_empr,
        cidade_empr: clientes[i].cidade_empr,
      });
    }
    res.json(json);
  },

  buscarClientes: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let cliente = await AtoigaService.buscarClientes(id);

    if (cliente) {
      json.result = cliente;
    }

    res.json(json);
  },

  buscarClientes2: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let cliente = await AtoigaService.buscarClientes2(id);

    if (cliente) {
      json.result = cliente;
    }

    res.json(json);
  },

  valorTotal: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;
    let cliente = await AtoigaService.valorTotal(id);

    if (cliente) {
      json.result = cliente;
    }

    res.json(json);
  },

  inserirClientes: async (req, res) => {
    let json = { erro: "", result: [] };
    let nome = req.body.nome;
    let data_nasc = req.body.data_nasc;
    let rg = req.body.rg;
    let cpf = req.body.cpf;
    let tel = req.body.tel;
    let cel = req.body.cel;
    let cep_cli = req.body.cep_cli;
    let num_cli = req.body.num_cli;
    let rua_cli = req.body.rua_cli;
    let bairro_cli = req.body.bairro_cli;
    let cidade_cli = req.body.cidade_cli;
    let empresa = req.body.empresa;
    let cep_empr = req.body.cep_empr;
    let num_empr = req.body.num_empr;
    let rua_empr = req.body.rua_empr;
    let bairro_empr = req.body.bairro_empr;
    let cidade_empr = req.body.cidade_empr;

    let cliente = await AtoigaService.inserirClientes(
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
    );

    if (cliente) {
      json.result = cliente;
    }
    res.json(json);
  },

  atualizarClientes: async (req, res) => {
    let json = { erro: "", result: [] };
    let nome = req.body.nome;
    let data_nasc = req.body.data_nasc;
    let rg = req.body.rg;
    let cpf = req.body.cpf;
    let tel = req.body.tel;
    let cel = req.body.cel;
    let cep_cli = req.body.cep_cli;
    let num_cli = req.body.num_cli;
    let rua_cli = req.body.rua_cli;
    let bairro_cli = req.body.bairro_cli;
    let cidade_cli = req.body.cidade_cli;
    let empresa = req.body.empresa;
    let cep_empr = req.body.cep_empr;
    let num_empr = req.body.num_empr;
    let rua_empr = req.body.rua_empr;
    let bairro_empr = req.body.bairro_empr;
    let cidade_empr = req.body.cidade_empr;

    let id = req.params.id;

    let clientes = await AtoigaService.atualizarClientes(
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
    );

    if (clientes) {
      json.result = clientes;
    }
    res.json(json);
  },

  atualizarValor: async (req, res) => {
    let json = { erro: "", result: [] };
    let valor = req.body.valor;
    let id = req.params.id;

    let clientes = await AtoigaService.atualizarValor(valor, id);

    if (clientes) {
      json.result = clientes;
    }
    res.json(json);
  },

  atualizarValor2: async (req, res) => {
    let json = { erro: "", result: [] };
    let valor = req.body.valor;
    let id = req.params.id;

    let clientes = await AtoigaService.atualizarValor2(valor, id);

    if (clientes) {
      json.result = clientes;
    }
    res.json(json);
  },

  deletarClientes: async (req, res) => {
    let json = { erro: "", result: [] };
    let id = req.params.id;

    let clientes = await AtoigaService.deletarClientes(id);

    if (clientes) {
      json.result = clientes;
    }
    res.json(json);
  },
};
