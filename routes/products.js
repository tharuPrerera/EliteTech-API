const express = require("express");
const productItem = require("../models/productItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let products = await productItem.find();
  res.send(products);
});

//get with params

//post 

//put with params

router.delete("/:productId", async (req, res) => {
  let product = await productItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }

  res.send(product);
});

module.exports = router;
