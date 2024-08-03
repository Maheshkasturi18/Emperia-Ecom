const Product = require("../models/product");

async function handlePostProduct(req, res) {
  console.warn("inside post function");

  const products = new Product(req.body);
  const val = await products.save();
  res.json(val);
}

async function handleGetProduct(req, res) {
  try {
    const { title } = req.query;

    let allProducts;

    if (title) {
      // fetching specific product
      allProducts = await Product.find({ title });
    } else {
      // fetching all product
      allProducts = await Product.find();
    }

    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handlePostProduct,
  handleGetProduct,
};
