var email = document.getElementById("email");
var emailError = document.getElementById("erremail");
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var conPassError = document.getElementById("errconfpass");
var passError = document.getElementById("errpass");
let login = document.getElementById("login");

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

login.addEventListener("click", (event) => {
  event.preventDefault();
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(
    (u) => u.email === email.value && u.password === password.value
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Successfully Logged In");
    window.open("index.html", "_self");
  } else {
    alert("wrong email or password");
  }
});
