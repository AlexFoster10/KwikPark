

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

  if(!validPassword(password,password2)){
    alert("passwords are not the same");
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
    let res = await fetch("/001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if(res.status == 200) {
      // Redirect to the new page
      window.location.href = '/userHome';
    }else if(res.status = 211){
      alert("Sign up failed. This email is alredy linked to an account");
    }
  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred. Please try again2.");
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

function validPassword(password, passowrdconf){
  if (password !== passowrdconf) {
    alert("Passwords do not match.");
    return false;
  }
}

async function encrypt(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
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