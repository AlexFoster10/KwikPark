document.addEventListener('DOMContentLoaded', function() {
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