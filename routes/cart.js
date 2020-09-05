const express = require("express");
const cartItem = require("../models/cartItem");
const router = express.Router();

router.get("/", async (req, res) => {
  let carts = await cartItem.find();
  res.send(carts);
});
 
//get with params

//post

//put with params

router.delete("/:productId", async (req, res) => {
  let cart = await cartItem.findOneAndDelete({ _id: req.params.productId });

  if (!cart) {
    return res.status(404).send("Product Id does not exit");
  }
  else{
    res.send({product:"Record has been Deleted..!!"});
  }
 
});

module.exports = router;
