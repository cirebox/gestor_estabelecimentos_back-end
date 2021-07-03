var express = require('express');
var router = express.Router();

var EstabelecimentoRoute = require('./v1/estabelecimento-route');

router.use('/estabelecimento', EstabelecimentoRoute)

module.exports = router;
