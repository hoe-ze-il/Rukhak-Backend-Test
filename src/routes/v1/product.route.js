import express from "express";
import controller from "../../controllers/product.controller.js";
import { createProductValidator } from "../../validators/product.validator.js";
import { runValidation } from "../../validators/index.js";

const router = express.Router();

router
  .route("/")
  .post(createProductValidator, runValidation, controller.createProduct);
//.get(controller.getAllProducts)

export default router;
