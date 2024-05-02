function signupForm() {
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phoneNum').value;
  var user = document.getElementById('newUsr').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('confirmPass').value;

  // Perform form validation
  if (!validEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
}

if (!validPhone(phone)) {
    alert("Please enter a valid phone number.");
    return false;
}

  // Redirect to the new page
  window.location.href = '/userHome';
  return false; // Prevent default form submission
}

function validEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validPhone(phone) {
  var phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}
