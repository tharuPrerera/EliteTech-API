const express = require("express");
const accessoriesItem = require("../models/accessoriesItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let accessories = await accessoriesItem.find();
  res.send(accessories);
});

//get with params

//post
router.post("/", async (req, res) => {
  if (!req.body.itemName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new accessoriesItem({
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
      stock:req.body.stock,
    });

    productToBeAddedToDb = await productToBeAddedToDb.save();
    res.send(productToBeAddedToDb);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

//put with params

router.delete("/:productId", async (req, res) => {
  let product = await accessoriesItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.send({product:"Record has been Deleted..!!"});
});

module.exports = router;
