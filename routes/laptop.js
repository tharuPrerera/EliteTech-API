const express = require("express");
const laptopItem = require("../models/laptopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let laptop = await laptopItem.find();
  res.send(laptop);
});

//get with params

//post 

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
