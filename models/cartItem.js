const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
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

const CartItem = mongoose.model("CartItem" , cartItemSchema);
module.exports = CartItem;