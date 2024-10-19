import {
  isEmailValid,
  isPasswordValid,
  isFirstNameValid,
  isLastNameValid,
  isSerialValid,
} from "../utils/UserValidation";

const UserRegistration = (email, password, firstname, lastname, serial) => {
  if (!isEmailValid(email)) throw new Error("Invalid Email Format");
  if (!isPasswordValid(password)) throw new Error("Invalid Password Format");
  if (!isFirstNameValid(firstname)) throw new Error("Invalid First Name");
  if (!isLastNameValid(lastname)) throw new Error("Invalid Last Name");
  if (!isSerialValid(serial)) throw new Error("Invalid Serial Number");
  try {
    return true;
  } catch (error) {
    throw Error("UnExpected Error");
  }
};

export { UserRegistration };
