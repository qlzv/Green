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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup_form");
  form.addEventListener("submit", (event) => {
    var notyf = new Notyf();
    event.preventDefault();
    const email = form.querySelector("#email").value;
    const first_name = form.querySelector("#nameFirst").value;
    const last_name = form.querySelector("#nameLast").value;
    const serial = form.querySelector("#Serial").value;
    const phone = form.querySelector("#Phone").value;
    const password = form.querySelector("#password").value;
    const password_confirm = form.querySelector("#password_confirm").value;
    if (!isEmailValid(email)) {
      notyf.error("Invalid Email");
      return;
    }
    if (!isFirstNameValid(first_name)) {
      notyf.error("Invalid Name");
      return;
    }
    if (!isLastNameValid(last_name)) {
      notyf.error("Invalid Name");
      return;
    }
    if (!isSerialValid(serial)) {
      notyf.error("Invalid Universty id");
      return;
    }
    if (!iPhoneValid(phone)) {
      notyf.error("Invalid Phone Number");
      return;
    }
    if (!isPasswordValid(password) || !isPasswordValid(password_confirm)) {
      notyf.error("Invalid Password");
      return;
    }
    if (password !== password_confirm) {
      notyf.error("Password Mismatch");
      return;
    }

    notyf.success("Success");
    setTimeout(() => {
      form.submit();
    }, 1000);
  });
});
