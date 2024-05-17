document.addEventListener("DOMContentLoaded", function() { 
  // Function to show the popup form
  function openForm() {
    document.querySelector('.popup-form-container').style.display = 'block';
  }

  // Function to hide the popup form
  function closeForm() {
    document.querySelector('.popup-form-container').style.display = 'none';
  }

  // Event listener for the open form button
  document.getElementById('openFormButton').addEventListener('click', openForm);

  // Event listener for the close form button
  document.getElementById('closeFormButton').addEventListener('click', closeForm);

  // Event listener for form submission (you can handle form submission logic here)
  document.getElementById('popupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Here you can write code to handle form submission, such as sending data to a server
    // For demonstration purposes, let's just log the form data to the console
    const formData = new FormData(this);
    console.log('Form submitted with data:', Object.fromEntries(formData.entries()));
    closeForm(); // Close the form after submission
  });
});

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

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  });
});

async function makeBooking() {
  console.log('makeBooking called'); // Debugging statement

  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var startTime = document.getElementById('start-time').value;
  var endTime = document.getElementById('end-time').value;

  // Perform form validation
  if (!isValidDate(day, month, year)) {
    alert("Please enter a valid date.");
    return false;
  }

  if (!isValidTime(startTime) || !isValidTime(endTime)) {
    alert("Please enter a valid time in HH:MM format.");
    return false;
  }

  // If form is valid, send data to the server
  const data = { 
    day: day, 
    month: month, 
    year: year,
    startTime: startTime,
    endTime: endTime
  };

  try {
    let res = await fetch("/003", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      console.log('Booking successful'); // Debugging statement
      // Show a success alert
      alert("Booking was successful! Thank you for choosing KwikPark.");
      // Optionally clear the form
      document.querySelector("form").reset();
    } else if (res.status === 211) {
      alert("Booking failed. The selected date or time is unavailable.");
    } else {
      throw new Error('Unexpected response status: ' + res.status);
    }
  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred. Please try again.");
  }

  return false; // Prevent default form submission
}

function isValidDate(day, month, year) {
  // Basic validation for date
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
    return false;
  }
  const dateStr = `${year}-${month}-${day}`;
  const date = new Date(dateStr);
  return date.getFullYear() == year && (date.getMonth() + 1) == month && date.getDate() == day;
}

function isValidTime(time) {
  // Basic validation for time in HH:MM format
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timePattern.test(time);
}

function getValues(){
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  
}