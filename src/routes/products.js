import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import Products from "../models/Products.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", async (req, res) => {
  const products = await Products.find();
  const credit = req.isAuthenticated() ? req.user.credit : 0;
  res.render(path.join(__dirname, "../.././view/products/index"), {
    auth: req.isAuthenticated(),
    credit: credit,
    products: products,
  });
});
export { router };
