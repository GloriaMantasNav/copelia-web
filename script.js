const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('is-open', !isOpen);
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const datos = new FormData(form);
  const asunto = `Consulta para Copelia: ${datos.get('nombre')}`;
  const cuerpo = [
    `Nombre: ${datos.get('nombre')}`,
    `Teléfono: ${datos.get('telefono') || 'No indicado'}`,
    `Correo: ${datos.get('correo')}`,
    '',
    'Mensaje:',
    datos.get('mensaje')
  ].join('\n');
  const enlace = `mailto:copeliamusica@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  document.querySelector('#form-note').textContent =
    'Se abrirá tu aplicación de correo con el mensaje preparado. Revísalo y pulsa Enviar para hacérnoslo llegar.';
  window.location.href = enlace;
});
