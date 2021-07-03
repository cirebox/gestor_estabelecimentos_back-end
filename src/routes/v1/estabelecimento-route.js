var express = require('express');
var router = express.Router();

var controller = require('../../controllers/estabelecimento-controller');

router.get('/', controller.list);
router.post('/', controller.add);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
