import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import { UserRegistration } from "../services/UserRegistration.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", async (req, res) => {
  res.render(path.join(__dirname, "../.././view/signup/index"));
});

router.post("/", async (req, res) => {
  const { email, nameFirst, nameLast, Serial, Phone, password } = req.body;
  try {
    await UserRegistration(email, password, nameFirst, nameLast, Serial, Phone);
    res.status(201).json("Success");
  } catch (e) {
    res.status(400).json("Error");
    console.log(e);
  }
});

export { router };
