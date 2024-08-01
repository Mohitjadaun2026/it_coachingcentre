// Get the carousel element
var testimonialCarousel = document.getElementById('testimonial-carousel');

// Create a new Bootstrap Carousel instance
var carousel = new bootstrap.Carousel(testimonialCarousel, {
  interval: 2000, // move to next slide after 2 seconds
  wrap: true,
  pause: 'hover' // pause slideshow on hover
});

// Add event listeners for navigation controls
document.querySelectorAll('.carousel-control-prev').forEach(function (element) {
  element.addEventListener('click', function () {
    carousel.prev();
  });
});

document.querySelectorAll('.carousel-control-next').forEach(function (element) {
  element.addEventListener('click', function () {
    carousel.next();
  });
});