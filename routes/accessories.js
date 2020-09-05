const express = require("express");
const accessoriesItem = require("../models/accessoriesItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let accessories = await accessoriesItem.find();
  res.send(accessories);
});

//get with params

//post

//put with params

router.delete("/:productId", async (req, res) => {
  let product = await accessoriesItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.send({product:"Record has been Deleted..!!"});
});

module.exports = router;
