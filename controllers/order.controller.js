const Order = require('../models/order.model');

module.exports.getOrder = (req, res) => {
    res.status(200).json({
        message: 'order retrived!'
    });
};

module.exports.addOrder = (req, res) => {
    
    res.status(200).json({
        message: 'order added!'
    });
};

module.exports.getAllOrders = (req, res) => {
    res.status(200).json({
        message: 'retrived all orders!'
    });
};


// req.body to check what the thing contains
module.exports.markShippedOrCanceled = (req, res) => {
    res.status(200).json({
        message: 'order marked as shipped!'
    });
};

