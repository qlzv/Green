import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import passport from "passport";
router.get("/", (req, res) => {
  if (req.isAuthenticated()) return res.redirect("/");
  const credit = req.isAuthenticated() ? req.user.credit : 0;
  res.render(path.join(__dirname, "../.././view/login/login"), {
    auth: req.isAuthenticated(),
    credit: credit,
  });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: false,
  })
);
export { router };
