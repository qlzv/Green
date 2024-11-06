import UserValidation from "../utils/UserValidation.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const UserRegistration = async (
  email,
  password,
  firstname,
  lastname,
  serial,
  phone
) => {
  const existingUserByEmail = await User.findOne({ email });
  if (existingUserByEmail) throw new Error("Email already exists");

  const existingUserBySerial = await User.findOne({ Serial: serial });
  if (existingUserBySerial) throw new Error("Serial number already exists");

  if (!UserValidation.isEmailValid(email))
    throw new Error("Invalid Email Format");
  if (!UserValidation.isPasswordValid(password))
    throw new Error("Invalid Password Format");
  if (!UserValidation.isFirstNameValid(firstname))
    throw new Error("Invalid First Name");
  if (!UserValidation.isLastNameValid(lastname))
    throw new Error("Invalid Last Name");
  if (!UserValidation.isSerialValid(serial))
    throw new Error("Invalid Serial Number");
  if (!UserValidation.iPhoneValid(phone))
    throw new Error("Invalid Phone Number");

  const hashPassword = bcrypt.hashSync(password, 10);
  password = hashPassword;
  const newUser = new User({
    email,
    password,
    phone,
    name: { first: firstname, last: lastname },
    Serial: serial,
    purchasesHistory: [],
  });

  try {
    await newUser.save();
    return true;
  } catch (error) {
    console.error("Unexpected Error:", error);
    throw new Error("Unexpected Error");
  }
};

export { UserRegistration };
