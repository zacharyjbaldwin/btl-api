const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true }
});

const addressSchema = mongoose.Schema({
    // check figma
    // address Schema
});

const orderSchema = mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contents: [cartSchema],
    // 0 pending, 1 shipped, 2 canceled
    status: { type: number, required: true },
    address: addressSchema,
    subTotal: { type: number, required: true },
    shippingPrice: { type: number, required: true },
    timestamp: { type: String, required: true}, 
});
module.exports = mongoose.model('Order', orderSchema);
