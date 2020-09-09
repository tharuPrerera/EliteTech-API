const express = require("express");
const accessoriesItem = require("../models/accessoriesItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let accessories = await accessoriesItem.find();
  res.send(accessories);
});

//get with params
  router.get("/:productId", async (req, res) => {
    let product = await accessoriesItem.findById(req.params.productId);
    if (!product) {
      return res
        .sendStatus(400)
        .send("The given id does not exist on our server...");
    }

    res.send(product);
  });


//post
router.post("/", async (req, res) => {
  if (!req.body.quantity) {
    return res.status(404).send("Please add  your quantitiy");
    
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
    res.status(200).send({message:"Product added successfully", productToBeAddedToDb}); 
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

//put with params
router.put("/:productId", async (req, res) => {
  let product = await accessoriesItem.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: { 
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
    { new: true, useFindAndModify: false }
  );
  res.send(product);
});

router.delete("/:productId", async (req, res) => {
  let product = await accessoriesItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.send({product:"Record has been Deleted..!!"});
});


module.exports = router;



