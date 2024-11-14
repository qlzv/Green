import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/login");
  const credit = req.isAuthenticated() ? req.user.credit : 0;
  res.render(path.join(__dirname, "../.././view/cart/index"), {
    auth: req.isAuthenticated(),
    credit: credit,
  });
});


export { router };
