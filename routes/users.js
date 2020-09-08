const express = require("express");
//const user=reqire("../models/user");
const User=require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
    if (!req.body.first_name) {
      return res.status(400).send("All fields required...!!!");
    }
    try {
      let userToBeAddedToDb = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        address:req.body.address,
        district:req.body.district,
        city:req.body.city,
        postalcode:req.body.postalcode,
        username:req.body.username,
        password:req.body.password,
        //confirm_password:req.body.confirm_password,
      });
  
      userToBeAddedToDb = await userToBeAddedToDb.save();
      res.status(200).send({message:"User registered successfully"},userToBeAddedToDb);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });
  module.exports = router;