import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import UserValidation from "../utils/UserValidation.js";
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        if (!UserValidation.isEmailValid(email))
          return done(null, false, { message: "Invalid email or password" });
        if (!UserValidation.isPasswordValid(password))
          return done(null, false, { message: "Invalid email or password" });
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid email or password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("-password");
    done(null, user);
  } catch (error) {
    done(error);
  }
});
