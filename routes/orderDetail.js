const express = require("express");
const orderDetails = require("../models/orderDetails");

const router = express.Router();

router.get("/", async (req, res) => {
  let order = await orderDetails.find();
  res.send(order);
});

//get with params

//post
router.post("/", async (req, res) => {
  if (!req.body.itemName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new orderDetails({
      first_name: req.body.first_name,
      address: req.body.address,
      email: req.body.email,
      address: req.body.address,
      postalcode:req.body.postalcode,
      username:req.body.username,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
    });

    productToBeAddedToDb = await productToBeAddedToDb.save();
    res.send(productToBeAddedToDb);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

//put with params


router.delete("/:productId", async (req, res) => {
  let product = await orderDetails.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }

  res.send(product);
});

module.exports = router;
