const express = require("express");
const desktopItem = require("../models/desktopItem");

const router = express.Router();

router.get("/", async (req, res) => {
  let desktop = await desktopItem.find();
  res.send(desktop);
});

//get with params

//post

//put with params


router.delete("/:productId", async (req, res) => {
  let product = await desktopItem.findOneAndDelete({ _id: req.params.productId });

  if (!product) {
    return res.status(404).send("Product Id does not exit");
  }
  res.send({product:"Record has been Deleted..!!"});
});

module.exports = router;
