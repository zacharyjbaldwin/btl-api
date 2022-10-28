const router = require('express').Router();
const mustBeAuthenticated = require('../middleware/check-authentication');
const orderController = require('../controllers/order.controller');

// api/order/
router.post('/', mustBeAuthenticated, orderController.createOrder);

module.exports = router;