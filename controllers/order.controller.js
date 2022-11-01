const Cart = require('../models/cart.model');
const Order = require('../models/order.model');
const Address = require('../models/address.model');
const mail = require('../helpers/mail-helper');

// Gets all orders for a specific user
module.exports.getMyOrders = (req, res) => {
    Order.find({creator: req.userData.userId}).then((order) => { // add the populate for something
        res.status(200).json({
            message: 'retrived my orders!',
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

// Gets all orders for admin
module.exports.getAllOrders = (req, res) => {
    Order.find().then((order) => { // add the populate for something
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

// gets order by ID 
module.exports.getOrder = (req, res) => {
    res.status(200).json({
        message: 'order retrived!'
    });
}

// req.body to check what the thing contains
module.exports.markShippedOrCanceled = (req, res) => {
    
    res.status(200).json({
        message: 'order marked as shipped!'
    });
};


// Stores order in the database
module.exports.createOrder = (req, res) => {
    if (!req.body.addressId || req.body.cardType == undefined
        || req.body.last4CardDigits == undefined || req.body.status == undefined
        || req.body.shippingPrice == undefined || req.body.subtotal == undefined
        || req.body.tax == undefined || req.body.totalPrice == undefined) {
        return res.status(400).json({
            error: 'Bad request.',
        });
    }

    Cart.findOne({ owner: req.userData.userId })
        .populate('contents.item')
        .then((cart) => {
            Address.findById(req.body.addressId)
                .then((address) => {
                    const order = new Order({
                        creator: req.userData.userId,
                        contents: cart.contents,
                        sendTo: address.sendTo,
                        addrLine1: address.addrLine1,
                        addrLine2: address.addrLine2,
                        city: address.city,
                        state: address.state,
                        zip: address.zip,
                        cardType: req.body.cardType,
                        last4CardDigits: req.body.last4CardDigits,
                        status: req.body.status,
                        shippingPrice: req.body.shippingPrice,
                        subtotal: req.body.subtotal,
                        tax: req.body.tax,
                        totalPrice: req.body.totalPrice,
                        timestamp: new Date().toUTCString()
                    });
                    order.save()
                        .then((order) => {
                            mail.sendInvoiceEmail(req.userData.email, order._id);
                            res.status(201).json({
                                message: 'Created order',
                                order: order
                            });
                        })
                        .catch((error) => {
                            res.status(500).json({
                                error: error
                            });
                        });
                })
                .catch((error) => {
                    res.status(500).json({
                        error: error
                    });
                });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};
