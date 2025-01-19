const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Routes for product management
router.post("/", createProduct); // Only admins can create products
router.get("/", getProducts); // Public: Anyone can view products
router.get("/:id", getProductById); // Public: Anyone can view a product by ID
router.put("/:id", updateProduct); // Only admins can update products
router.delete("/:id", protect, admin, deleteProduct); // Only admins can delete products

module.exports = router;
