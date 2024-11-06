import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import UserValidation from "../utils/UserValidation.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../.././view/login/login"));
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!UserValidation.isEmailValid(email)) return;
  if (!UserValidation.isPasswordValid(password)) return;
  try {
    res.status(200).json("Welcome");
  } catch (e) {
    res.status(404).json("Error");
    console.log(e);
  }
});
export { router };
