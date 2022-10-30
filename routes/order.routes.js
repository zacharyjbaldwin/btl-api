const mustBeAuthenticated = require('../middleware/check-authentication');
const mustBeAdmin = require('../middleware/check-admin');
const router = require('express').Router();
const orderController = require('../controllers/example.controller');

// POST root/api/orders
// add order
router.post('/', orderController.addOrder);

// GET root/api/ordesr/:id
// get order by id, only admins can get any order otherwise you get order belonging to you
router.get('/:id', mustBeAuthenticated, orderController.getOrder);

// GET root/api/orders/
// get all orders
router.get('/', mustBeAuthenticated, orderController.getAllOrders); // mustBe Authenticated part must be added

// GET root/api/orders/:orderId
// mark order as shipped or canceled
router.put('/:orderId', mustBeAuthenticated, orderController.markShippedOrCanceled);

module.exports = router;