const express = require("express");
const router = express.Router();
const {
  handlePostProduct,
  handleGetProduct,
} = require("../controllers/product");

router.post("/", handlePostProduct);
router.get("/", handleGetProduct);

module.exports = router;
