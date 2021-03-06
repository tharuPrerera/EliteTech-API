const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const laptop = require('./routes/laptop');
const desktop = require('./routes/desktop');
const accessories = require('./routes/accessories');
const products = require('./routes/products')
const orderDetail = require('./routes/orderDetail');
const cart = require('./routes/cart');

//user
const users =require('./routes/users');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/laptop',laptop);
app.use('/api/desktop',desktop);
app.use('/api/accessories',accessories);
app.use('/api/products',products);
app.use('/api/orderDetail', orderDetail);
app.use('/api/cart',cart);

//user
app.use('/api/users',users);


mongoose //database connection string
  .connect("mongodb://localhost/items", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Db successfully..."))
  .catch((err) =>
    console.log("Error has occured while connecting to db : ", err)
  );

app.listen(PORT, function () {
    console.log("Listening on port - " + PORT);
  });