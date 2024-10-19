import {
  isEmailValid,
  isPasswordValid,
  isFirstNameValid,
  isLastNameValid,
  isSerialValid,
} from "../src/utils/UserValidation.js";

test("Check Email Valid", () => {
  expect(isEmailValid("azzeh@gmail.com")).toBe(true); // Valid Email
  expect(isEmailValid("azzehgmail.com")).toBe(false); // Invalid No @
  expect(isEmailValid("202311042@students.asu.edu.jo")).toBe(true); // Valid Email
  expect(isEmailValid("202311042@students.asu.edu.")).toBe(false); // Invalid Domain Is Not Completed
  expect(isEmailValid("   202311042@students.asu.edu.jo   ")).toBe(false); // Invalid White Spaces
  expect(isEmailValid("")).toBe(false); // Invalid Empty
});

test("Check Password Valid", () => {
  expect(isPasswordValid("Az1928$")).toBe(false); // Invalid Less Than 8 Charcters
  expect(isPasswordValid("Azzeh1985$")).toBe(true); // Valid
  expect(isPasswordValid("Azzehazzzz$")).toBe(false); // Invalid No Number
  expect(isPasswordValid("a12345678$")).toBe(false); // Invalid No At Least 8 Charcters
  expect(isPasswordValid("12345678")).toBe(false); // Invalid At Least 8 Charcters and one special charcter
  expect(isPasswordValid("Azzeh1985111")).toBe(false); // Invalid No Special Charcter
});

test("Check First Name", () => {
  expect(isFirstNameValid("Qatada")).toBe(true); // Valid
  expect(isFirstNameValid("Ali")).toBe(true); // Valid
  expect(isFirstNameValid("A123")).toBe(false); // Invalid Number Included
  expect(isFirstNameValid("12345")).toBe(false); // Invalid All Numbers
  expect(isFirstNameValid("AB")).toBe(false); // Invalid 3 Charcters At Least
  expect(isFirstNameValid("")).toBe(false); // Invalid Empty
});

test("Check Last Name", () => {
  expect(isLastNameValid("Azzeh")).toBe(true); // Valid
  expect(isLastNameValid("Azh")).toBe(false); // Invalid Must Be More than 3 charcters
  expect(isLastNameValid("a123")).toBe(false); // invalid have numbers
  expect(isLastNameValid("12345")).toBe(false); // invalid all numbers
  expect(isLastNameValid("")).toBe(false); // invalid Empty
});

test("Check Universty Identifaction", () => {
  expect(isSerialValid(202311042)).toBe(true); // Valid
  expect(isSerialValid(202411042)).toBe(true); // Valid
  expect(isSerialValid(20231104)).toBe(false); // Invalid less then 9 charcters
  expect(isSerialValid(202911042)).toBe(false); // Invalid year is more then 2024
  expect(isSerialValid(201811042)).toBe(false); // Invalid year is less then 2019
  expect(isSerialValid("2023110ab")).toBe(false); // Invalid have charcters
  expect(isSerialValid("")).toBe(false); // Invalid Empty
});
