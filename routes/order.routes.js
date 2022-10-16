const mustBeAuthenticated = require('../middleware/check-authentication');
const mustBeAdmin = require('../middleware/check-admin');
const router = require('express').Router();
const orderController = require('../controllers/example.controller');

// add order
router.post('/', orderController.addOrder);

// get order by id, only admins can get any order otherwise you get order belonging to you
router.get('/:id', mustBeAuthenticated, orderController.getOrder);

// get all order
router.get('/', mustBeAuthenticated, mustBeAdmin, orderController.getAllOrders);

// mark order as shipped
router.put('/:orderId', mustBeAuthenticated, orderController.markShippedOrder);

// mark order as canceled
router.put('/:orderId', mustBeAuthenticated, orderController.markCanceledOrder);

module.exports = router;