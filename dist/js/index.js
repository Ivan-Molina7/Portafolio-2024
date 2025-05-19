const iconos = document.querySelectorAll('.habilidades__card img');
const iconCards = document.querySelectorAll('.habilidades__card');

iconCards.forEach(card => {
    const icono = card.querySelector('img'); // Solo la imagen dentro de esta tarjeta
  
    card.addEventListener('mouseenter', () => {
      if(icono && icono.dataset.color) {
        icono.src = icono.dataset.color;
      }
    });
  
    card.addEventListener('mouseleave', () => {
      if(icono && icono.dataset.gris) {
        icono.src = icono.dataset.gris;
      }
    });
  });