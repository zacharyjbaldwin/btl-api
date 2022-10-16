const router = require('express').Router();
const orderController = require('../controllers/example.controller');

// add order
router.post('/', orderController.addOrder);

// get order by id, only admins can get any order otherwise you get order belonging to you
router.get('/:orderid', mustBeAuthenticated, orderController.getOrder);

// get all order
router.get('/', mustBeAuthenticated, orderController.getAllOrders);

// mark order as shipped
router.post('/:orderId', mustBeAuthenticated, orderController.markShippedOrder);

// mark order as canceled
router.post('/:orderId', mustBeAuthenticated, orderController.markCanceledOrder);

module.exports = router;