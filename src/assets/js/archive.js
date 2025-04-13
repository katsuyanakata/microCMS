// fetchAPI

function loadPart(selector, path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => {
      console.log('Fetch error for ' + selector + ': ' + error.message);
    });
}

function callParts() {
  loadPart('head', '../parts/head.html');
  loadPart('header', '../parts/header.html');
  loadPart('footer', '../parts/footer.html');
}



function Slider() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex <= 0) ? slide.length - 1 : currentIndex - 1;
    updateSlidePosition();
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex >= slide.length - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
  });

  function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  }
}



