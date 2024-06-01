document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("formulario");
  const botonEnviar = document.getElementById("botonEnviar");

  // Función para validar el formulario
  function validarFormulario() {
      const nombre = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const asunto = document.getElementById("asunto").value;
      const mensaje = document.getElementById("mensaje").value;

      if (!nombre || !email || !asunto || !mensaje) {
          alert("Por favor completa todos los campos.");
          return false;
      }
      return true;
  }

  // Evento para enviar el formulario
  botonEnviar.addEventListener("click", function(event) {
      if (!validarFormulario()) {
          event.preventDefault(); // Evitar que se envíe el formulario si no está completo
      }
  });

  // Evento para habilitar o deshabilitar el botón de enviar según la validez del formulario
  formulario.addEventListener("input", function() {
      botonEnviar.disabled = !formulario.checkValidity();
  });
});