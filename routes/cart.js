const express = require("express");
const cartItem = require("../models/cartItem");
const router = express.Router();

router.get("/", async (req, res) => {
  let carts = await cartItem.find();
  res.send(carts);
});
 
//get with params
  router.get("/:productId", async (req, res) => {
    let cart = await cartItem.findById(req.params.productId);
    if (!cart) {
      return res
        .sendStatus(400)
        .send("The given id does not exist on our server...");
    }
    res.send(cart);
  });


//post
router.post("/", async (req, res) => {
  if (!req.body.itemName) {
    return res.status(400).send("Not all mandetory values have been set");
  }
  try {
    let productToBeAddedToDb = new cartItem({
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
  let cart = await cartItem.findOneAndUpdate (
    {
       _id: req.params.productId 
    },
    {
       $set:
        { 
          imgUrl:req.body.imgUrl,
          itemName: req.body.itemName,
          unitPrice: req.body.unitPrice,
          brand:req.body.brand,
          code:req.body.code,
          warranty:req.body.warranty,
          quantity:req.body.quantity,
          stock:req.body.stock
        }
    },
    { 
      new: true, useFindAndModify: false
    }
  );
  res.send(cart);
});



