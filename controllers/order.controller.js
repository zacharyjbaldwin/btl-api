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

module.exports.markShippedOrder = (req, res) => {
    res.status(200).json({
        message: 'order marked as shipped!'
    });
};

module.exports.markCanceledOrder = (req, res) => {
    res.status(200).json({
        message: 'order marked as canceled!'
    });
};