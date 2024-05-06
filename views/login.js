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