document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const telephoneInput = document.getElementById("telephone");
    const bioInput = document.getElementById("bio");
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const telephoneError = document.getElementById("telephoneError");
    const bioError = document.getElementById("bioError");
  
    firstNameInput.addEventListener("input", function () {
      validateAlphanumericLength(firstNameInput, firstNameError, 3, 16);
    });
  
    lastNameInput.addEventListener("input", function () {
      validateAlphanumericLength(lastNameInput, lastNameError, 3, 16);
    });
  
    emailInput.addEventListener("input", function () {
      validateEmail(emailInput, emailError);
    });
  
    passwordInput.addEventListener("input", function () {
        validatePassword(passwordInput, passwordError);
      });
  
    telephoneInput.addEventListener("input", function () {
      validateTelephone(telephoneInput, telephoneError);
    });
  
    bioInput.addEventListener("input", function () {
      validateBio(bioInput, bioError);
    });
  
    form.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  
    function validateAlphanumericLength(input, errorElement, min, max, allowedChars) {
      const value = input.value;
      const regex = allowedChars ? new RegExp(`^[a-zA-Z0-9${allowedChars}]{${min},${max}}$`) : new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`);
      if (!regex.test(value)) {
        errorElement.textContent = `Must be alphanumeric and contain ${min}-${max} characters.`;
      } else {
        errorElement.textContent = "";
      }
    }
    function validatePassword(input, errorElement) {
        const value = input.value;
        const regex = /^[a-zA-Z0-9@_-]{6,20}$/;
        if (!regex.test(value)) {
          errorElement.textContent = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters.";
        } else {
          errorElement.textContent = "";
        }
      }
    function validateEmail(input, errorElement) {
      const value = input.value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        errorElement.textContent = "Must be a valid email address, e.g., example@example.com.";
      } else {
        errorElement.textContent = "";
      }
    }
  
    function validateTelephone(input, errorElement) {
      const value = input.value;
      const regex = /^\d{10}$/;
      if (!regex.test(value)) {
        errorElement.textContent = "Must be a valid 10-digit phone number.";
      } else {
        errorElement.textContent = "";
      }
    }
  
    function validateBio(input, errorElement) {
      const value = input.value;
      if (value.length < 10 || value.length > 100) {
        errorElement.textContent = "Bio must be between 10 and 100 characters.";
      } else {
        errorElement.textContent = "";
      }
    }
  
    function validateForm() {
      return (
        firstNameError.textContent === "" &&
        lastNameError.textContent === "" &&
        emailError.textContent === "" &&
        passwordError.textContent === "" &&
        telephoneError.textContent === "" &&
        bioError.textContent === ""
      );
    }
  });
  