const sections = [
    document.getElementById('hero'),
    document.getElementById('proyectos'),
    document.getElementById('habilidades'),
    document.getElementById('about'),
    document.getElementById('contacto')
  ];
  const circles = document.querySelectorAll('.hud-secciones .circle');
  
  function updateActiveCircle() {
    let index = 0;
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
  
    // Buscar la sección más cercana a la parte superior del viewport
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.3) {
        index = i;
      }
    });
  
    // Actualizar las clases de los círculos
    circles.forEach((circle, i) => {
      if (i === index) {
        circle.classList.add('circle--active');
      } else {
        circle.classList.remove('circle--active');
      }
    });
  }
  
  // Ejecutar al cargar y al hacer scroll
  window.addEventListener('scroll', updateActiveCircle);
  window.addEventListener('load', updateActiveCircle);