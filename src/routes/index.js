import express from "express";

const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { router as aboutUsRouter } from "./aboutUs";
// const serversRouter = require("./servers");
// const dashboardRouter = require("./dashboard");
router.use("/about-us", aboutUsRouter);
// router.use("/servers", serversRouter);
// router.use("/dashboard", dashboardRouter);

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../../view/index"));
});

export default router;
