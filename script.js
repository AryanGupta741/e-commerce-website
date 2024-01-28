console.log('hello world');

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
})
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
})
}

let currentIndex = 0;

function showSlide(index) {
  const sliderContent = document.querySelector('.slider-content');
  const slides = document.querySelectorAll('.slide');
  currentIndex = (index + slides.length) % slides.length;
  const translateValue = -currentIndex * 100 + '%';
  sliderContent.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Optional: Automatic slide change
setInterval(() => {
  nextSlide();
}, 3000); // Change slide every 3 seconds

function clearTextField() {
    document.getElementById("myInput").value = "";
}
