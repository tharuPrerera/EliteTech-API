const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    last_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email:{
        type: String,
       // required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    district:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    city: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    postalcode: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    // confirm_password:{
    //     type: String,
    //     required: true,
    //     minlength: 5,
    //     maxlength: 1024
    // },
});

const User = mongoose.model("User" , userSchema);
module.exports = User;
