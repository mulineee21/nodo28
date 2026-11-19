// Número real de WhatsApp de Nodo28 (con prefijo 34, sin espacios ni "+")
const WHATSAPP_NUMBER = '34637663537';

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const perfil = document.getElementById('perfil').value;
    const modalidad = document.getElementById('modalidad').value;
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const texto = [
      `Hola Nodo28, soy ${nombre}.`,
      `Perfil: ${perfil}`,
      `Modalidad: ${modalidad}`,
      `Contacto: ${telefono}`,
      `Consulta: ${mensaje}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    if (formFeedback) {
      formFeedback.textContent =
        'Abriendo WhatsApp con tu consulta preparada... Si no se abre automáticamente, revisa el bloqueador de ventanas.';
    }

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}
