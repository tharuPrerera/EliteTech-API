const express = require("express");
const orderDetails = require("../models/orderDetails");

const router = express.Router();

router.get("/", async (req, res) => {
  let order = await orderDetails.find();
  res.send(order);
});

//get with params

//post

//put with params


router.delete("/:productId", async (req, res) => {
  let product = await orderDetails.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }

  res.send(product);
});

module.exports = router;
