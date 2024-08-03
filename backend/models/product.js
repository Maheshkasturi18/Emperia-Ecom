const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  qnty: Number,
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
