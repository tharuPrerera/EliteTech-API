const express = require("express");
const laptopItem = require("../models/laptopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let laptop = await laptopItem.find();
  res.send(laptop);
});

//get with params
  router.get("/:productId", async (req, res) => {
    let product = await laptopItem.findById(req.params.productId);
    if (!product) {
      return res
        .sendStatus(400)
        .send("The given id does not exist on our server...");
    }

    res.send(product);
  });


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
router.put("/:productId", async (req, res) => {
  let product = await laptopItem.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: { 
      imgUrl:req.body.imgUrl,
      itemName: req.body.itemName,
      unitPrice: req.body.unitPrice,
      brand:req.body.brand,
      code:req.body.code,
      warranty:req.body.warranty,
      quantity:req.body.quantity,
      stock:req.body.stock,
      }
    },
    { new: true, useFindAndModify: false }
  );
  res.send(product);
});

module.exports = router;




