let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let subscribeActive = document.getElementById("subscribe");

function validateEmail() {
  if (emailInput.value === "" || !emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = "Oops! Please check your email";
    emailError.classList.add("oops");
    subscribeActive.classList.remove("subscribe-active")
    document.getElementById("subscribe").disabled = true;
    return false;
  } 
  emailError.innerHTML = "";
  subscribeActive.classList.add("subscribe-active")
  document.getElementById("subscribe").disabled = false;
  return true;
};