"use strict";

console.log("JAVASCRIPT");

const buttonAdd = document.getElementById("button-add");

const checkemail = () => {
  try {
    event.preventDefault();
    let email = document.getElementById("email").value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let check = pattern.test(email);

    if (check === false) {
      alert("Please enter a correct email address!");
    }
  } catch (error) {
    document.write(
      "Sorry for the inconvenience, but we're having a problem. Please try again later."
    );
  }
};

buttonAdd.addEventListener("click", checkemail);
