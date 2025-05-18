const modal = document.getElementById('carouselModal');
const openModalBtn = document.querySelector('.hero-proyecto__image-container');
const overlay = modal.querySelector('.modal-carousel__overlay');
const images = modal.querySelectorAll('.modal-carousel__img');
const nextBtn = modal.querySelector('.modal-carousel__arrow--right');
const prevBtn = modal.querySelector('.modal-carousel__arrow--left');

let currentSlide = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function openModal() {
  modal.setAttribute('aria-hidden', 'false');
  showSlide(0);

}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restaurar scroll
}

openModalBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

// Navegación
nextBtn.addEventListener('click', () => {
  let next = (currentSlide + 1) % images.length;
  showSlide(next);
});

prevBtn.addEventListener('click', () => {
  let prev = (currentSlide - 1 + images.length) % images.length;
  showSlide(prev);
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
  if (modal.getAttribute('aria-hidden') === 'false') {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  }
});
