const modalBackground = document.querySelector('.modal-background');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = modalBackground.querySelector('.close');
const modalActivate = document.querySelectorAll('.timeline-activate'); // botón que abre el modal
let lastFocusedBtn = null;


const titulo = document.querySelector('.modal__titulo');
const subtitulo = document.querySelector('.modal__subtitulo');
const subtituloNota = document.querySelector('.modal__nota');
const imagen = document.querySelector('.modal__image');


const modalContent = [
    {
      titulo: "I.T.I (Instituto Tecnológico de Informatica)",
      nota: "11",
      imagen: "assets/img/Bg-borrador1.png",
      alt: "Descripción imagen 1"
    },
    {
      titulo: "Desarrollador Front-end (BIOS)",
      nota: "95%",
      imagen: "assets/img/about/biosDiploma.png",
      alt: "Descripción imagen 2"
    },
    {
      titulo: "Diseñador Digital orientación web (ORT)",
      nota: "92%",
      imagen: "assets/img/Bg-borrador1.png",
      alt: "Descripción imagen 3"
    }
  ];



function openModal(event) {
  lastFocusedBtn = event.currentTarget;
  const itemIndex = Number(event.currentTarget.dataset.item);
  const content = modalContent[itemIndex];

  titulo.textContent = content.titulo;

  subtituloNota.textContent = content.nota;
  imagen.src = content.imagen;
  imagen.alt = content.alt;


  modalBackground.setAttribute('aria-hidden', 'false');
 
}

function closeModal() {
  modalBackground.setAttribute('aria-hidden', 'true');
  if (lastFocusedBtn) lastFocusedBtn.focus();

}


modalActivate.forEach(btn => {
    btn.addEventListener('click', openModal);;
})

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (modalBackground.getAttribute('aria-hidden') === 'false') {
    if (e.key === 'Escape') closeModal();
  }
});
