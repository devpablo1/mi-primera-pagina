// script.js

function toggleMenu() {
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000); // Cambia el slide cada 3 segundos (5000 milisegundos)

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}
