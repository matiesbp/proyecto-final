// --> POPUP MENU <--
//( Pedro, he tenido que ver varios videos de Yotube y ayudarme con el Chat GPT para poder entender como hacer el menú PopUp porque se me complicaba mucho. De primeras yo solo conseguí crear el icono de menú desplegable y hacer que se abriera el popup pero no se me ocurría como podía hacer lo del overlay exterior y desactivar el scroll y tampoco conseguia que los enlaces funcionaran. A partir de ahi me vi unos cuantos videos en Youtube y conseguí que funcionara, pero luego me di cuenta que solo funcionaba en la home y que en las demás páginas no, asi que le pedí ayuda al Chat GPT y conseguí arreglarlo. Como és un extra y lo hice cuando ya había terminado el proyecto lo hice ayudándome. Podría haber dejado el header normal que de primeras lo había hecho responsive, pero se me ocurrió probar de hacer esto y en verdad que bastante más pro. Espero que me entiendas. Thank youu!!)
document.addEventListener("DOMContentLoaded", function () {
  // Selección de todos los elementos necesarios
  let burgerIcon = document.querySelector(".header__burger");
  let menuPopup = document.querySelector(".menu-popup");
  let closeIcon = document.querySelector(".menu-popup__close");
  let overlay = document.querySelector(".overlay");
  let links = document.querySelectorAll(".menu-popup__list a");
  // Añadir evento click al icono de hamburguesa para abrir el menú
  burgerIcon.addEventListener("click", function () {
    menuPopup.classList.add("active");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Desactivar el scroll
  });
  // Añadir evento click al icono de cerrar para cerrar el menú
  closeIcon.addEventListener("click", function () {
    menuPopup.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Activar el scroll
  });
  // Añadir evento click al overlay para cerrar el menú
  overlay.addEventListener("click", function () {
    menuPopup.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Activar el scroll
  });
  // Añadir evento click a cada enlace del menú
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      let targetHref = this.getAttribute("href");
      // Si el enlace lleva a otra página
      if (targetHref.includes("html")) {
        return; // Dejar que el enlace se maneje por defecto
      } else {
        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();
        menuPopup.classList.remove("active");
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Activar el scroll
        // Obtener el destino del enlace
        let target = document.querySelector(this.getAttribute("href"));
        // Hacer scroll suave a la sección destino
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
