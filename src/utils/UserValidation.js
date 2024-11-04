function isEmailValid(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
}

function isFirstNameValid(name) {
  const nameRegex = /^[a-zA-Z]+$/;
  return name.length >= 3 && nameRegex.test(name);
}

function isLastNameValid(name) {
  const nameRegex = /^[a-zA-Z]+$/;
  return name.length > 3 && nameRegex.test(name);
}

function isSerialValid(serial) {
  const serialRegex = /^(2019|2020|2021|2022|2023|2024)\d{5,}$/;
  return serialRegex.test(serial);
}

function iPhoneValid(serial) {
  serial = serial.trim();
  const serialRegex = /^(07[789]\d{7})$/;
  return serialRegex.test(serial);
}

const UserValidation = {
  isEmailValid,
  isPasswordValid,
  isFirstNameValid,
  isLastNameValid,
  isSerialValid,
  iPhoneValid,
};

export default UserValidation;
