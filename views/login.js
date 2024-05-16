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

  function validEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function loginForm(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const data = {
      email: email,
      password: password,
    };

    if (!validEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }else{
      
        let res = await fetch("/002", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })

        interpriteError(res.status);
    }
    return false; // Prevent default form submission


  }

  function interpriteError(code){
    switch(code){
      case 200:
        window.location.href = '/userHome';
        // user has submited corect information takeing them to
        break;
      case 210:
        alert("Login Failed. You have enterd the wrong passoword");
        window.location.href = '/login';
        break;
      case 209:
        alert("Login Failed. You have enterd an unknown email");
        window.location.href = '/login';
        break;
      default:
        alert("Login has failed due to an unknown error");
        window.location.href = '/login';
        break;   
    } 
    
  }