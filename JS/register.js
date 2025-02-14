var email = document.getElementById("email");
var emailError = document.getElementById("erremail");
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var nameError = document.getElementById("errname");
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var conPassError = document.getElementById("errconfpass");
var passError = document.getElementById("errpass");
let register = document.getElementById("register");

let users = JSON.parse(localStorage.getItem("users")) || [];
username.addEventListener("input", () => {
  if (username.value.length < 4) {
    nameError.style.display = "block";
    nameError.innerText = "Name must be more than 4 chars";
  } else {
    nameError.style.display = "none";
  }
});

email.addEventListener("input", () => {
  if (!regex.test(email.value)) {
    emailError.style.display = "block";
    emailError.innerText = "Please enter a valid email";
  } else {
    emailError.style.display = "none";
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 3) {
    passError.style.display = "block";
    passError.innerText = "Password Too Short";
  } else {
    passError.style.display = "none";
  }
});

confirmPassword.addEventListener("blur", () => {
  if (password.value !== confirmPassword.value) {
    conPassError.style.display = "block";
    conPassError.innerText = "Password Not Matched";
  } else {
    conPassError.style.display = "none";
  }
});

register.addEventListener("click", (event) => {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find((u) => u.email === email.value)) {
    alert("Email Already Exists");
    return;
  }

  if (
    username.value.length >= 4 &&
    regex.test(email.value) &&
    password.value === confirmPassword.value
  ) {
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    alert("Registered Successfully");

    window.open("index.html", "_self");
  } else {
    alert("Please fill out the form correctly");
  }
});
