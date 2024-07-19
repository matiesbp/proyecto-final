// --> SLIDER DE TESTIMONIOS <--
// Array de testimonios
let testimonials = [
  {
    image: "media/webp/maties-testimonial.webp",
    text: '"Llevo dos años entrenando con MPRunning y la experiencia ha sido absolutamente transformadora. Antes de unirme, nunca hubiera imaginado alcanzar los niveles de forma física y las marcas personales que he logrado bajo la guía de este entrenador."',
    name: "Maties Burguera",
    age: "28 años",
  },
  {
    image: "media/webp/mateu-testimonial.webp",
    text: '"Es un club que entrena el método noruego, que me ha ayudado a saber controlar ritmos y no ir siempre rápido. Gracias a los miembros del club trabajamos para ir mejorando."',
    name: "Mateu Monserrat",
    age: "15 años",
  },
  {
    image: "media/webp/miguel-testimonial.webp",
    text: '"Muy familiar, muy profesional. Un 10! Realmente recomiendo MPRunning a cualquier persona interesada en mejorar su técnica de carrera y bienestar físico en un ambiente acogedor y altamente profesional. Ideal para corredores de todos los niveles."',
    name: "Miguel Pascual",
    age: "45 años",
  },
  {
    image: "media/webp/toni-testimonial.webp",
    text: '"Lo mejor, el ambiente sano que se disfruta en cada entrenamiento presencial. Sesiones con muy buen rollo que ayudan a superar los entrenamientos mas fácilmente. Siempre te sientes apoyado por el grupo. El nivel es muy diferente entre todos los atletas pero eso no importa a la hora de disfrutar del buen rollo en los entrenamientos. ¡Muy recomendado!"',
    name: "Toni Vallbona",
    age: "42 años",
  },
  {
    image: "media/webp/agustina-testimonial.webp",
    text: '"Entrenamientos planificados a medida. Desde que pertenezco a este equipo he conseguido mejorar ritmos y distancia. Destacable el ambiente y compañerismo entre los miembros del equipo. Desde el primer día me han animado y me han ayudado a progresar. ¡Grandes!"',
    name: "Agustina Adrover",
    age: "42 años",
  },
  {
    image: "media/webp/mangel-testimonial.webp",
    text: '"Fantástico, el ambiente es inmejorable, somos una gran familia y los entrenamientos son totalmente personalizados. Lo recomiendo a todo el mundo que quiera mejorar en su forma de correr y disfrutar cada paso del proceso."',
    name: "Miquel Àngel Garí",
    age: "28 años",
  },
  {
    image: "media/webp/marta-testimonial.webp",
    text: '"He notado una increíble mejoría. Y no me cuesta hacer los entrenamientos como antes. ¡Me encanta!"',
    name: "Marta Alvariño",
    age: "50 años",
  },
  {
    image: "media/webp/monica-testimonial.webp",
    text: '"Súper buen ambiente en el equipo y es genial salir a entrenar con los entrenamientos listos cada semana."',
    name: "Mónica Bello",
    age: "33 años",
  },
  {
    image: "media/webp/jaume-testimonial.webp",
    text: '"Correr con mas de 50 años no es fácil, pero con MP Running y mucha constancia he conseguido una progresión que jamás podría haber imaginado."',
    name: "Jaume Pascual",
    age: "54 años",
  },
  {
    image: "media/webp/antonia-testimonial.webp",
    text: '"Desde que entreno con MP Running he mejorado mucho mis tiempos y mi resistencia. Estoy muy contenta con mi progresión y gran parte es gracias a Miquel Perelló."',
    name: "Antònia Mulet",
    age: "54 años",
  },
];
let currentTestimonialIndex = 0;
// Seleccionar los elementos
let pictureElement = document.querySelector(".testimonials__image");
let imageElement = pictureElement.querySelector("img");
let textElement = document.querySelector(".testimonials__text");
let nameElement = document.querySelector(".testimonials__name");
let ageElement = document.querySelector(".testimonials__age");
let prevButton = document.querySelector(".testimonials__nav--prev");
let nextButton = document.querySelector(".testimonials__nav--next");
let dotsContainer = document.querySelector(".testimonials__dots");
//Actualizar el testimonio
function updateTestimonial(index) {
  let testimonial = testimonials[index];
  let sourceElement = pictureElement.querySelector("source");
  //Actualizar la imagen del testimonio
  sourceElement.srcset = testimonial.image;
  imageElement.src = testimonial.image;
  imageElement.alt = `Testimonio ${index + 1}`;
  //Actualizar la info del testimonio
  textElement.textContent = testimonial.text;
  nameElement.textContent = testimonial.name;
  ageElement.textContent = testimonial.age;
  //Actualizar dots de navegación
  document.querySelectorAll(".testimonials__dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}
//Crear dots de navegación
function createDots() {
  testimonials.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("testimonials__dot");
    if (index === currentTestimonialIndex) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      currentTestimonialIndex = index;
      updateTestimonial(currentTestimonialIndex);
    });
    dotsContainer.appendChild(dot);
  });
}
//Eventos para botones de navegación
prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Ir al testimonio anterior, o al último si estamos en el primero
  currentTestimonialIndex =
    currentTestimonialIndex > 0
      ? currentTestimonialIndex - 1
      : testimonials.length - 1;
  updateTestimonial(currentTestimonialIndex);
});
nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Ir al siguiente testimonio, o al primero si estamos en el último
  currentTestimonialIndex =
    currentTestimonialIndex < testimonials.length - 1
      ? currentTestimonialIndex + 1
      : 0;
  updateTestimonial(currentTestimonialIndex);
});
// Cambiar testimonio cada 10 segundos automáticamente
setInterval(() => {
  currentTestimonialIndex =
    currentTestimonialIndex < testimonials.length - 1
      ? currentTestimonialIndex + 1
      : 0;
  updateTestimonial(currentTestimonialIndex);
}, 10000);
// Inicializar
createDots();
updateTestimonial(currentTestimonialIndex);
// --> ACORDEÓN DE FAQS <--
// Seleccionar todos los elementos de pregunta de FAQ y añadir un evento al hacer click
document.querySelectorAll(".faqs__question").forEach((item) => {
  item.addEventListener("click", () => {
    // Seleccionar el elemento padre de la pregunta
    let parent = item.parentElement;
    // Seleccionar la respuesta que corresponda
    let answer = parent.querySelector(".faqs__answer");
    // Alternar la clase 'active' para mostrar u ocultar la respuesta
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
    } else {
      // Cerrar todas las otras preguntas abiertas
      document
        .querySelectorAll(".faqs__item")
        .forEach((child) => child.classList.remove("active"));
      parent.classList.add("active");
    }
  });
});
