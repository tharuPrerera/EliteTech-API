const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    email:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    postalcode: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    },
    itemName: {
        type: String,
        minlength: 2,
        maxlength: 200,
        required: true,
    },
    unitPrice:{
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    },
    warranty: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const OrderDetail = mongoose.model("OrderDetail" , orderDetailSchema);
module.exports = OrderDetail;