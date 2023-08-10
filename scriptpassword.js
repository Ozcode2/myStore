
function handlePasswordRecovery() {
  var email = document.getElementById("recovery_email").value;
  var storedEmail = localStorage.getItem("userEmail");
  var storedPassword = localStorage.getItem("userPassword");
  var storedName = localStorage.getItem("userName")

  if (email === storedEmail) {
    // recover user password
     document.querySelector(".modal").style.display = "block";
     document.getElementById("mode").innerHTML = storedName + " Your password is: " + storedPassword;
    return false;
  } else {
    document.querySelector(".modal").style.display = "block";
    document.getElementById("mode").innerHTML = "Invalid email address";
    return false;
  }
}

function openModal() {
  window.location.href = "page2.html";
}

function closeModal() {
  window.location.href = "password.html";
}
