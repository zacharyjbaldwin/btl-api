const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    //everything in there
    contents: { required: true },
    status: { required: true },
    address: { type: String, required: true },
    cartID: { required: true },
    subTotal: { required: true },
    total: { required: true },
    tax: { required: true },
    shippingPrice: { required: true },
    timestamp: { type: String, required: true},
});
module.exports = mongoose.model('Order', orderSchema);
