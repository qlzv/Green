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
    UserRegistration(email, password, nameFirst, nameLast, Serial, Phone);
    res.status(200).json("Welcome");
  } catch (e) {
    res.status(404).json("Error");
    console.log(e);
  }
});

/*
to do
make sure in user reg modul check for existting users and edit http code

*/
export { router };
