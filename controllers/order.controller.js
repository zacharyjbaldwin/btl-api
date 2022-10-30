const Order = require('../models/order.model');

module.exports.getOrder = (req, res) => {
    // .populate
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
    Order.find().populate('contents.BookId').then((order) => {
        res.status(200).json({
            message: 'retrived all orders!',
            order: order,
        });
    }).catch(
        (error)=> {
            res.status(500).json({
                error: 'failed to fetch orders', 
            }); 
        }
    )
};

// req.body to check what the thing contains
module.exports.markShippedOrCanceled = (req, res) => {
    res.status(200).json({
        message: 'order marked as shipped!'
    });
};

