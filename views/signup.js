async function signupForm() {
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phoneNum').value;
  var userName = document.getElementById('newUsr').value;
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

  if (password !== password2) {
    alert("Passwords do not match.");
    return false;
  }

  // If form is valid, send data to the server

  const data = { 
    email: email, 
    userName: userName,  
    password: password, 
    phoneNumber: phone 
  };

  try {
    let response = await fetch('/001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      // Redirect to the new page
      window.location.href = '/userHome';
    } else {
      alert("Signup failed. Please try again.");
    }
  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred. Please try again.");
  }

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

//Toggle burger visibility
document.addEventListener("DOMContentLoaded", function() {
  var burger = document.querySelector('.burger-icon');
  var dropdownContent = document.querySelector('.dropdown-content');

  burger.addEventListener('click', function() {
    // Toggle visibility
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });

  window.addEventListener('click', function(e) {
    if (!burger.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});