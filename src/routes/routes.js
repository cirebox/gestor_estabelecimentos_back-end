"use strict";
var router = require("express").Router();

const authentication = require("../helper/authentication");
const authMiddleware = require("../middleware/authMiddleware ");

var EstabelecimentoRoute = require("./estabelecimento-route");
var UsuarioRoute = require("./usuario-route");
var controller = require("../controller/usuario-controller");

router.post("/signup", controller.add);
router.post("/auth", authentication.auth);
router.use(authMiddleware);

// router.use(function timeLog(req, res, next) {
//   var data = new Date();
//   data.setHours(data.getHours() - 3); // Joga o fuso horário Brasileiro
//   console.log("Time: ", data.toGMTString());
//   next();
// });

router.use("/usuario", UsuarioRoute);
router.use("/estabelecimento", EstabelecimentoRoute);

module.exports = router;
