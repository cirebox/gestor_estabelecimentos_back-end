var express = require("express");
var router = express.Router();

var controller = require("../controller/usuario-controller");

router.get("/", controller.list);
router.put("/", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
