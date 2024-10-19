import { UserRegistration } from "../src/services/UserRegistration";

test("Check Invalid User Registration", () => {
  try {
    UserRegistration(
      "qoqoazzeh@gmail.com",
      "Azzeh1985$",
      "Qatada",
      "Azzeh",
      20231104
    );
  } catch (err) {
    expect(err.message).toEqual("Invalid Serial Number");
  }
});

test("Check valid User Registration", () => {
  expect(
    UserRegistration(
      "qoqoazzeh@gmail.com",
      "Azzeh1985$",
      "Qatada",
      "Azzeh",
      202311042
    )
  ).toBe(true);
});
