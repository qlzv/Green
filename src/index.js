import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../view/")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable("x-powered-by");
app.use(cookieParser());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
