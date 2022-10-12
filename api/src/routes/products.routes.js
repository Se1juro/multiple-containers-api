const { Router } = require("express");
const {
  getAllProducts,
  createProducts,
  deleteAllProducts,
} = require("../controllers/products.controller");

const router = Router();

router.get("/api/products", getAllProducts);

router.post("/api/products", createProducts);

router.delete("/api/products", deleteAllProducts);

module.exports = router;
