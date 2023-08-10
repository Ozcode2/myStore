function handleLogin() {
  var email = document.getElementById("user_email").value;
  var password = document.getElementById("user_password").value;

  var getEmail = localStorage.getItem("userEmail");
  var getPassword = localStorage.getItem("userPassword");
  var getUserName = localStorage.getItem("userName");

  if (email === getEmail && password === getPassword) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Store the logged-in user in localStorage
    localStorage.setItem("loggedInUser", getUserName);
    localStorage.getItem("tomatoCartCount");
    localStorage.getItem("productCostTomato");
    localStorage.getItem("springCartCount");
    localStorage.getItem("productCostSpring");
    localStorage.getItem("eggCartCount");
    localStorage.getItem("productCostEgg");
    localStorage.getItem("pepperCartCount");
    localStorage.getItem("productCostPepper");
    localStorage.getItem("beansCartCount");
    localStorage.getItem("productCostBeans");
    localStorage.getItem("onionCartCount");
    localStorage.getItem("productCostOnion");

    return false;
  } else {
    var model = document.getElementById("myModel");
    model.style.display = "block";

    return false;
  }
}

function openModal() {
  window.location.href = "index.html";
}

function closeModal() {
  window.location.href = "page2.html";
}


