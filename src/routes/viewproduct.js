import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import Products from "../models/Products.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:id", async(req, res) => {
if(!req.params) return res.redirect("/products");
const pro = await Products.findById(req.params.id)
if(!pro)return res.redirect("/products");
  const credit = req.isAuthenticated() ? req.user.credit : 0;
  res.render(path.join(__dirname, "../.././view/view-product/index"), {
    auth: req.isAuthenticated(),
    credit: credit,
    product : pro
  });
});

router.get("/",async(req,res)=>{
  if(!req.isAuthenticated()) return res.status(401).json({msg : "error"});
  return  res.status(200).json({msg : "success"});
})
export { router };
