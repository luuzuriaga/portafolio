document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("formulario");
  const botonEnviar = document.getElementById("botonEnviar");

  // Smooth scroll para la navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  });

  // Función para validar email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Función para validar el formulario completo
  function validarFormulario() {
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Limpiar mensajes de error previos
    document.querySelectorAll('.form__controls-container').forEach(el => {
      el.classList.remove('form__controls-container--error');
    });

    document.querySelectorAll('.form__error-message').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });

    let esValido = true;

    // Validar nombre
    if (!nombre) {
      mostrarError('name', 'El nombre es requerido');
      esValido = false;
    } else if (nombre.length < 3) {
      mostrarError('name', 'El nombre debe tener al menos 3 caracteres');
      esValido = false;
    }

    // Validar email
    if (!email) {
      mostrarError('email', 'El email es requerido');
      esValido = false;
    } else if (!validarEmail(email)) {
      mostrarError('email', 'Ingresa un email válido (ejemplo@correo.com)');
      esValido = false;
    }

    // Validar asunto
    if (!asunto) {
      mostrarError('asunto', 'El asunto es requerido');
      esValido = false;
    } else if (asunto.length < 5) {
      mostrarError('asunto', 'El asunto debe tener al menos 5 caracteres');
      esValido = false;
    }

    // Validar mensaje
    if (!mensaje) {
      mostrarError('mensaje', 'El mensaje es requerido');
      esValido = false;
    } else if (mensaje.length < 10) {
      mostrarError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
      esValido = false;
    }

    return esValido;
  }

  // Función para mostrar errores
  function mostrarError(inputId, mensaje) {
    const input = document.getElementById(inputId);
    const container = input.closest('.form__controls-container');
    container.classList.add('form__controls-container--error');
    
    // Encontrar el mensaje de error correspondiente
    let errorMsg = container.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('form__error-message')) {
      errorMsg.textContent = mensaje;
      errorMsg.style.display = 'block';
    }
  }

  // Función para limpiar errores de un campo específico
  function limpiarError(inputId) {
    const input = document.getElementById(inputId);
    const container = input.closest('.form__controls-container');
    container.classList.remove('form__controls-container--error');
    
    let errorMsg = container.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('form__error-message')) {
      errorMsg.textContent = '';
      errorMsg.style.display = 'none';
    }
  }

  // Validación en tiempo real mientras el usuario escribe
  const inputs = ['name', 'email', 'asunto', 'mensaje'];
  inputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    
    input.addEventListener('input', function() {
      // Limpiar error cuando el usuario empieza a escribir
      limpiarError(inputId);
      
      // Habilitar/deshabilitar botón según validez del formulario
      actualizarEstadoBoton();
    });

    input.addEventListener('blur', function() {
      // Validar el campo cuando pierde el foco
      validarCampoIndividual(inputId);
    });
  });

  // Función para validar un campo individual
  function validarCampoIndividual(inputId) {
    const input = document.getElementById(inputId);
    const valor = input.value.trim();

    switch(inputId) {
      case 'name':
        if (!valor) {
          mostrarError(inputId, 'El nombre es requerido');
        } else if (valor.length < 3) {
          mostrarError(inputId, 'El nombre debe tener al menos 3 caracteres');
        }
        break;
      case 'email':
        if (!valor) {
          mostrarError(inputId, 'El email es requerido');
        } else if (!validarEmail(valor)) {
          mostrarError(inputId, 'Ingresa un email válido');
        }
        break;
      case 'asunto':
        if (!valor) {
          mostrarError(inputId, 'El asunto es requerido');
        } else if (valor.length < 5) {
          mostrarError(inputId, 'El asunto debe tener al menos 5 caracteres');
        }
        break;
      case 'mensaje':
        if (!valor) {
          mostrarError(inputId, 'El mensaje es requerido');
        } else if (valor.length < 10) {
          mostrarError(inputId, 'El mensaje debe tener al menos 10 caracteres');
        }
        break;
    }
  }

  // Función para actualizar el estado del botón
  function actualizarEstadoBoton() {
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Habilitar botón solo si todos los campos tienen contenido
    const todosLlenos = nombre && email && asunto && mensaje;
    botonEnviar.disabled = !todosLlenos;
  }

  // Evento para enviar el formulario
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validarFormulario()) {
      // Simular envío exitoso
      const nombre = document.getElementById("name").value.trim();
      
      // Mostrar mensaje de éxito
      alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.`);
      
      // Limpiar formulario
      formulario.reset();
      botonEnviar.disabled = true;
      
      // Limpiar todos los errores
      document.querySelectorAll('.form__controls-container').forEach(el => {
        el.classList.remove('form__controls-container--error');
      });
      
      document.querySelectorAll('.form__error-message').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
      });

      // Scroll suave hacia arriba después de enviar
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Inicializar el estado del botón al cargar la página
  actualizarEstadoBoton();

  // Agregar animación de entrada a las secciones cuando aparecen en viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar todas las secciones principales
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});