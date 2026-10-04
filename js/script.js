// Scroll suave al hacer click en los links del navbar (ya que html {scroll-behavior: smooth} no funciona en algunos navegadores)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      // Ajustar offset para navbar fijo (altura navbar aprox 60px)
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});


// Seleccionamos todos los links con data-modal
document.querySelectorAll('a[data-modal]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modalId = link.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active'); // mostramos el modal
      document.body.style.overflow = 'hidden'; // para evitar scroll del fondo
    }
  });
});

// Seleccionamos todos los botones cerrar modales
document.querySelectorAll('.custom-modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.custom-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // restauramos scroll fondo
  });
});

// También cerrar modal al hacer click fuera del contenido
document.querySelectorAll('.custom-modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) { // solo si clicas en el fondo oscuro
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});


