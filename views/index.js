

$(document).ready(function() {
    $("#datepicker").datepicker();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the first set of slides and pagination bullets
    const slider1Slides = document.querySelectorAll('.home-slider .swiper-slide');
    const slider1PaginationBullets = document.querySelectorAll('.home-slider .swiper-pagination-bullet');
    let currentSlider1SlideIndex = 0;

    // Get the second set of slides and pagination bullets
    const slider2Slides = document.querySelectorAll('.home-slider1 .swiper-slide');
    const slider2PaginationBullets = document.querySelectorAll('.home-slider1 .swiper-pagination-bullet');
    let currentSlider2SlideIndex = 0;

    // Function to show a specific slide in the first slider with sliding animation
    function showSlider1Slide(index) {
        slider1Slides.forEach(slide => {
            slide.style.transition = 'left 0.5s';
            slide.style.left = -index * 100 + '%';
        });

        slider1PaginationBullets.forEach(bullet => {
            bullet.classList.remove('swiper-pagination-bullet-active');
        });
        slider1PaginationBullets[index].classList.add('swiper-pagination-bullet-active');
    }

    // Function to show a specific slide in the second slider with sliding animation
    function showSlider2Slide(index) {
        slider2Slides.forEach(slide => {
            slide.style.transition = 'left 0.5s';
            slide.style.left = -index * 100 + '%';
        });

        slider2PaginationBullets.forEach(bullet => {
            bullet.classList.remove('swiper-pagination-bullet-active');
        });
        slider2PaginationBullets[index].classList.add('swiper-pagination-bullet-active');
    }

    // Show the initial slides for both sliders
    showSlider1Slide(currentSlider1SlideIndex);
    showSlider2Slide(currentSlider2SlideIndex);

    // Function to navigate to the next slide in the first slider
    function nextSlider1Slide() {
        currentSlider1SlideIndex++;
        if (currentSlider1SlideIndex >= slider1Slides.length) {
            currentSlider1SlideIndex = 0;
        }
        showSlider1Slide(currentSlider1SlideIndex);
    }

    // Function to navigate to the previous slide in the first slider
    function prevSlider1Slide() {
        currentSlider1SlideIndex--;
        if (currentSlider1SlideIndex < 0) {
            currentSlider1SlideIndex = slider1Slides.length - 1;
        }
        showSlider1Slide(currentSlider1SlideIndex);
    }

    // Function to navigate to the next slide in the second slider
    function nextSlider2Slide() {
        currentSlider2SlideIndex++;
        if (currentSlider2SlideIndex >= slider2Slides.length) {
            currentSlider2SlideIndex = 0;
        }
        showSlider2Slide(currentSlider2SlideIndex);
    }

    // Function to navigate to the previous slide in the second slider
    function prevSlider2Slide() {
        currentSlider2SlideIndex--;
        if (currentSlider2SlideIndex < 0) {
            currentSlider2SlideIndex = slider2Slides.length - 1;
        }
        showSlider2Slide(currentSlider2SlideIndex);
    }

    // Add event listeners to the next and previous buttons for the first slider
    const slider1NextButton = document.querySelector('.home-slider-button-next');
    const slider1PrevButton = document.querySelector('.home-slider-button-prev');
    slider1NextButton.addEventListener('click', nextSlider1Slide);
    slider1PrevButton.addEventListener('click', prevSlider1Slide);

    // Add event listeners to the next and previous buttons for the second slider
    const slider2NextButton = document.querySelector('.home-slider1 .swiper-button-next');
    const slider2PrevButton = document.querySelector('.home-slider1 .swiper-button-prev');
    slider2NextButton.addEventListener('click', nextSlider2Slide);
    slider2PrevButton.addEventListener('click', prevSlider2Slide);
});

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