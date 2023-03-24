const express = require("express");
const router = express.Router();
const AtoigaController = require("./controllers/AtoigaControllers.js");
const Tb_jurosController = require("./controllers/tb_jurosControllers.js");
const Tb_valoresController = require("./controllers/tb_valoresControllers.js");
const Tb_hist_pagController = require("./controllers/tb_hist_pagControllers.js");
const Tb_admController = require("./controllers/tb_admControllers.js");
const Tb_blController = require("./controllers/tb_blControllers.js");

// 26
// tb_cli
router.get("/atoiga", AtoigaController.buscartodos);
router.get("/atoiga/:id", AtoigaController.buscarClientes);
router.get("/atoiga2/:id", AtoigaController.buscarClientes2);
router.get("/valorTotal/:id", AtoigaController.valorTotal);
router.post("/atoiga_insert", AtoigaController.inserirClientes);
router.put("/atoiga_update/:id", AtoigaController.atualizarClientes);
router.put("/atualizarValor/:id", AtoigaController.atualizarValor);
router.put("/atualizarValor2/:id", AtoigaController.atualizarValor2);
router.delete("/atoiga_delete/:id", AtoigaController.deletarClientes);

// tb_juros
router.get("/juros", Tb_jurosController.buscarJuros);
router.put("/juros_update", Tb_jurosController.atualizarJuros);

// tb_valores
router.get("/valores/:id", Tb_valoresController.buscarValores);
router.get("/valor/:id", Tb_valoresController.buscarValor);
router.get("/enviado", Tb_valoresController.buscarEnviado);
router.get("/enviado_total", Tb_valoresController.buscarValorTotal);
router.post("/valores_insert", Tb_valoresController.inserirValores);
router.post("/insert_enviado", Tb_valoresController.insertEnviado);
router.delete("/valores_delete/:id", Tb_valoresController.deletarValores);

// tb_hist_pag
router.get("/hist_pag/:id", Tb_hist_pagController.buscarHist_pag);
router.get("/hist_pag2", Tb_hist_pagController.buscarHist_pag2);
router.get(
  "/selectBuscarTodosRecebidos",
  Tb_hist_pagController.selectBuscarTodosRecebidos
);
router.post("/hist_pag_insert", Tb_hist_pagController.inserirHist_pag);
router.delete("/hist_pag_delete/:id", Tb_hist_pagController.deletarHist_pag);

// tb_adm
router.get("/adm/:login/:senha", Tb_admController.buscarAdm);

// tb_bl
router.get("/black_list_select", Tb_blController.buscartodos);
router.post("/black_list_insert", Tb_blController.inserirClientes);

module.exports = router;
