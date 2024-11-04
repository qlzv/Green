import UserValidation from "../utils/UserValidation.js";
const UserRegistration = (
  email,
  password,
  firstname,
  lastname,
  serial,
  phone
) => {
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
  try {
    return true;
  } catch (error) {
    throw Error("UnExpected Error");
  }
};

export { UserRegistration };
