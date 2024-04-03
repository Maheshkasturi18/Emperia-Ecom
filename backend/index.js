const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors()); // Use the cors middleware
const PORT = process.env.PORT || 8000;
require("dotenv").config(); // Load environment variables from .env file

mongoose
  .connect(process.env.DATABASE,)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  qnty: Number,
});
const Product = mongoose.model("Product", productSchema);

app.post("/api/products", async (req, res) => {
  console.warn("inside post function");

  const products = new Product({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    qnty: req.body.qnty,
  });

  const val = await products.save();
  res.json(val);
});

// Define API endpoint for fetching all products
app.get("/api/products", async (req, res) => {
  try {
    const { title } = req.query;

    let allProducts;

    if (title) {
      // If the title query parameter is provided, filter products by title
      allProducts = await Product.find({ title });
    } else {
      // If no title parameter provided, fetch all products
      allProducts = await Product.find();
    }
    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
