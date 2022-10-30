const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true }
});

const addressSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sendTo: { type: String, required: true },
    addrLine1: { type: String, required: true },
    addrLine2: { type: String, required: false, default: '' },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    defaultAddr: { type: Boolean, required: false, default: false }
});

const orderSchema = mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contents: [cartSchema],
    status: { type: number, required: true },  // 0 pending, 1 shipped, 2 canceled
    address: addressSchema,
    subTotal: { type: number, required: true },
    shippingPrice: { type: number, required: true },
    timestamp: { type: String, required: true}, 
});
module.exports = mongoose.model('Order', orderSchema);
