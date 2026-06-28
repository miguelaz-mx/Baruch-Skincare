const form = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector(".nav");

if (menuToggle && siteHeader && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      siteHeader.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nombre = data.get("nombre") || "Sin nombre";
    const servicio = data.get("servicio") || "Servicio no especificado";
    const mensaje = data.get("mensaje") || "Me gustaría recibir información.";

    const text = `Hola, soy ${nombre}. Me interesa: ${servicio}. ${mensaje}`;
    const whatsappUrl = `https://wa.me/527751217590?text=${encodeURIComponent(text)}`;

    formNote.textContent = "Abriendo WhatsApp para enviar tu mensaje.";
    window.open(whatsappUrl, "_blank", "noopener");
    form.reset();
  });
}
