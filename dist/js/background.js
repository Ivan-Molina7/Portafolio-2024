const bgLayer1 = document.querySelector('.bg-layer1');
const bgLayer2 = document.querySelector('.bg-layer2');
const secciones = document.querySelectorAll('.section-bg');

let debounceTimeout = null;
let lastBg = null;
let activeLayer = 1; // 1 o 2

function cambiarFondoConFade(nuevoBg) {
  if (nuevoBg === lastBg) return;

  const layerToShow = activeLayer === 1 ? bgLayer2 : bgLayer1;
  const layerToHide = activeLayer === 1 ? bgLayer1 : bgLayer2;

  layerToShow.style.backgroundImage = `url(${nuevoBg})`;
  layerToShow.classList.add('visible');
  layerToHide.classList.remove('visible');

  activeLayer = activeLayer === 1 ? 2 : 1;
  lastBg = nuevoBg;
}

function detectarSeccionActiva() {
  let seccionActiva = null;
  const ventanaAltura = window.innerHeight;

  secciones.forEach((seccion) => {
    const rect = seccion.getBoundingClientRect();
    if (rect.top <= ventanaAltura * 0.5 && rect.bottom >= ventanaAltura * 0.5) {
      seccionActiva = seccion;
    }
  });

  if (seccionActiva) {
    const bg = seccionActiva.dataset.bg;
    if (bg) {
      cambiarFondoConFade(bg);
    }
  }
}

function cambiarFondoConDebounce() {
  if (debounceTimeout) clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    detectarSeccionActiva();
  }, 100); // 2 segundos debounce
}

// Precarga de imágenes (opcional pero recomendado)
const fondos = [
  "../assets/img/Backgrounds/Bg-borrador-1.png",
  "../assets/img/Backgrounds/Bg-borrador-3.png",
  "../assets/img/Backgrounds/Bg-borrador-5.png",
  "../assets/img/Backgrounds/Bg-borrador-8.png",
];

fondos.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Al cargar la página, asignar fondo inmediatamente sin debounce
window.addEventListener('load', detectarSeccionActiva);

// Al hacer scroll, usar debounce para actualizar fondo
window.addEventListener('scroll', cambiarFondoConDebounce);
