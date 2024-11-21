import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
if(!req.isAuthenticated()) return res.redirect("/login");
const credit = req.isAuthenticated() ? req.user.credit : 0;
res.render(path.join(__dirname, "../.././view/credit/index"), {
auth: req.isAuthenticated(),
credit: credit,
});
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
  });
const upload = multer({ storage : storage });
router.post("/", upload.single('image'),(req,res)=>{
    if(!req.isAuthenticated()) return res.redirect("/login");
    const cart = JSON.parse(req.body.cart);
    const image = req.file;
    if (!cart || Object.keys(cart).length === 0) {
        return res.status(400).json({ msg: "Cart is empty" });
    }
    console.log('Cart:', cart);
    console.log('Image:', image);
    res.json({ msg: "success" });

})
export { router };
