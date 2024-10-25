import express from "express";

const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { router as aboutUsRouter } from "./aboutus.js";
import { router as prodcutsRouter } from "./products.js";
import { router as dashboardRouter } from "./viewproduct.js";
router.use("/about-us", aboutUsRouter);
router.use("/products", prodcutsRouter);

router.use("/view_product", dashboardRouter);

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../../view/index"));
});

export default router;
