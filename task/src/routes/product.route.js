const express = require("express");
const productController = require("../controllers/product.controller");
const productValidation = require("../validation/product.validation");
const router = express.Router();
const validate = require("../middlewares/validate");

router.get(
  "/product",
  validate(productValidation.getProducts),
  productController.getProduct
);

module.exports = router;
