const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors()); // Use the cors middleware
const PORT = process.env.PORT || 8000;
// Load environment variables from .env file
require("dotenv").config();

const productRouter = require("./routes/product");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/products", productRouter);

// port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
