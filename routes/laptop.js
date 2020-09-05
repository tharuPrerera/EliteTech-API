const express = require("express");
const laptopItem = require("../models/laptopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let laptop = await laptopItem.find();
  res.send(laptop);
});

//get with params

//post 
router.post("/", async (req, res) => {
  if (!req.body.itemName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new laptopItem({
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
  let product = await laptopItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  else{
     res.send({product:"Record has been Deleted..!!"});
  }
});

module.exports = router;
