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
import { router as ordersRouter } from "./orders.js";
import { router as profileRouter } from "./profile.js";
import { router as signoutRouter } from "./signout.js";
import { router as cliqRouter } from "./cliq.js";
router.use("/about-us", aboutUsRouter);
router.use("/products", prodcutsRouter);
router.use("/view_product", dashboardRouter);
router.use("/cart", cartRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.use("/orders", ordersRouter);
router.use("/profile", profileRouter);
router.use("/signout", signoutRouter);
router.use("/cliq-pay", cliqRouter);
router.get("/", async (req, res) => {
  const credit = req.isAuthenticated() ? req.user.credit : 0;

  res.render(path.join(__dirname, "../../view/index"), {
    auth: req.isAuthenticated(),
    credit: credit,
  });
});

export default router;
