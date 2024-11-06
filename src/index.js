import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import { connectToDatabase } from "./db/connect.js";
import passport from "passport";
import "./utils/UserAuth.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, "../view/")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable("x-powered-by");
app.use(cookieParser());
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session()); // Use Passport sessions

app.use("/", mainRouter);

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
};

startServer();
