const express = require("express");
//const user=reqire("../models/user");
const user=require("../models/user");
const router = express.Router();


router.post("/", async (req, res) => {
  if(!req.body.first_name &&
    !req.body.last_name &&
    !req.body.email &&
    !req.body.address &&
    !req.body.district &&
    !req.body.city &&
    !req.body.postalcode &&
    !req.body.username &&
    !req.body.password &&
    !req.body.confirm_password
    ){
      return res.status(404).send("Not all mandotry values have been set !");
    }

  if (!req.body.first_name  ) {
    return res.status(404).send("First name cannot be blank.");
  }

  if (!req.body.last_name) {
    return res.status(404).send("Last Name cannot be blank.");
  }

  if (!req.body.email) {
    return res.status(404).send("email cannot be blank.");
  }

  if (!req.body.address) {
    return res.status(404).send("Address cannot be blank.");
  }

  if (!req.body.district) {
    return res.status(404).send("district cannot be blank.");
  }

  if (!req.body.city) {
    return res.status(404).send("City cannot be blank.");
  }

  if (!req.body.postalcode) {
    return res.status(404).send("Postalcode cannot be blank.");
    //return res.status(404).send("use correct num");
  }

  if (!req.body.username) {
    return res.status(404).send("Username cannot be blank.");
  }

  if (!req.body.password) {
    return res.status(404).send("Password cannot be blank.");
  }
    try {
      let userToBeAddedToDb = new user({
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