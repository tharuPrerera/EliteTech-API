const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
            },
            message: props => `${props.value} is not a Person's name!`
          }

    },
    last_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
            },
            message: props => `${props.value} is not a Person's name!`
          }
    },
    email:{
        type: String,
       // required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid Email Address!`
          }
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
        validate: {
            validator: function(v) {
              return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
            },
            message: props => `${props.value} is not a Person's name!`
          }
    },
    city: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
            },
            message: props => `${props.value} is not a Person's name!`
          }
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
