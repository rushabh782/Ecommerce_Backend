const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

// Routes for order management
router.post("/", createOrder); // Create a new order
router.get("/", getOrders); // Get all orders
router.get("/:id", getOrderById); // Get order by ID
router.put("/:id/status", updateOrderStatus); // Update order status by ID

module.exports = router;
