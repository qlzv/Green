import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json("Logout error");
    }
    res.redirect("/login");
  });
});
export { router };
