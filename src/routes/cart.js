import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import Products from "../models/Products.js";
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


const ValidatePrice = (DefaultPrice,Quantity,FinalPrice) =>{
  Quantity = parseInt(Quantity);
 // console.log(Quantity*DefaultPrice,FinalPrice)
  return (Quantity*DefaultPrice === FinalPrice);
}

router.post('/',async(req,res)=>{
if(!req.isAuthenticated()) return res.redirect("/login");
if(!req.body || req.body.payment_method !== 'CLIQ' && req.body.payment_method !== 'PICK' || !req.body.CartData) return res.status(401).json({msg : "error"});
const CartData = req.body.CartData;
for(let crt in CartData){
const Exisit = await Products.findOne({'name' : crt});
if(!Exisit) res.status(401).json({msg : "error"});
const product = CartData[crt];
const options = product.options;
const quantity = options.find(option => option.hasOwnProperty('quantity')).quantity;
const finalPrice = options.find(option => option.hasOwnProperty('finalPrice')).finalPrice;
const ExisitPrice = (Exisit.isSale > 0 ? Exisit.price - (Exisit.price * Exisit.isSale / 100) : Exisit.price);
if(!ValidatePrice(ExisitPrice,quantity,finalPrice)){ 
console.log("Error")
return res.status(401).json({msg : "error"})
}
}
res.status(200).json({msg : "success"})
})

export { router };
