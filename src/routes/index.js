import express from "express";

const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { router as aboutUsRouter } from "./aboutus.js";
import { router as prodcutsRouter } from "./products.js";
import { router as dashboardRouter } from "./viewproduct.js";
import { router as cartRouter } from "./cart.js";
import { router as loginRouter } from "./login.js";
import { router as signupRouter } from "./signup.js";
router.use("/about-us", aboutUsRouter);
router.use("/products", prodcutsRouter);
router.use("/view_product", dashboardRouter);
router.use("/cart", cartRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../../view/index"));
});

export default router;
