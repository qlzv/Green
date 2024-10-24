import express from "express";
const router = express.Router();
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.get("/", (req, res) => {
  res.render(path.join(__dirname, ".../../view/about-us/index"));
});
export { router };
