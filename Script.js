function prepararPantallaQR() {
  const botonQR = document.getElementById('btn-qr-pago');
  const mensajeQR = document.getElementById('qr-mensaje');

  botonQR.disabled = false; // ✅ Vuelve a estar habilitado
  mensajeQR.innerText = ''; // ✅ Limpia cualquier mensaje anterior
  mensajeQR.style.color = ''; // ✅ Resetea el color también por las dudas
}


const secciones = {
  inicio: document.getElementById('pantalla-inicio'),
  qr: document.getElementById('pantalla-qr'),
  saldo: document.getElementById('pantalla-saldo'),
  recarga: document.getElementById('pantalla-recarga'),
  pagoSube: document.getElementById('pantalla-pago-sube')
};

let saldo = 100;  // Este es el saldo que inicialmente tienes, puede cambiar dinámicamente

function mostrarPantalla(nombre) {
  Object.values(secciones).forEach(sec => sec.classList.remove('activa'));
  secciones[nombre].classList.add('activa');

  if (nombre === 'recarga') {
    document.getElementById('mensaje-recarga').innerText = '';
  }

  if (nombre === 'pagoSube') {
    // Limpiar el mensaje de saldo al entrar en la pantalla de pago SUBE
    document.getElementById('mensaje-saldo').innerText = '';
    document.getElementById('btn-recargar').style.display = 'none'; // Ocultar el botón de recarga si entras
    document.getElementById('btn-subir-pago').disabled = false; // Reactivar el botón "SUBE"
  }

}

// Botones principales
document.getElementById('btn-qr').addEventListener('click', () => {
  prepararPantallaQR();  // 🛠️ Prepara la pantalla QR cada vez que entras
  mostrarPantalla('qr');
});

// Botón "Consultar saldo SUBE" en la pantalla de inicio
document.getElementById('btn-saldo').addEventListener('click', () => {
  // Crear un mensaje de saldo
  const mensajeSaldo = document.createElement('div');
  mensajeSaldo.textContent = `Tu saldo actual es: $${saldo.toFixed(2)}`;
  mensajeSaldo.style.color = 'white'; // Color blanco
  mensajeSaldo.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fondo oscuro para visibilidad
  mensajeSaldo.style.padding = '10px 20px'; // Relleno para que el texto no quede pegado al borde
  mensajeSaldo.style.borderRadius = '5px'; // Bordes redondeados
  mensajeSaldo.style.position = 'fixed'; // Fijo en la parte superior
  mensajeSaldo.style.top = '20px'; // 20px desde la parte superior
  mensajeSaldo.style.left = '50%'; // Centrado horizontalmente
  mensajeSaldo.style.transform = 'translateX(-50%)'; // Ajuste perfecto al centro
  mensajeSaldo.style.zIndex = '1000'; // Asegura que se muestre encima de otros elementos

  // Añadir el mensaje a la página
  document.body.appendChild(mensajeSaldo);
  
  // Opcional: Eliminar el mensaje después de 3 segundos
  setTimeout(() => {
    mensajeSaldo.remove();
  }, 5000);
});

document.getElementById('btn-recarga').addEventListener('click', () => {
  mostrarPantalla('recarga');
});

// Botón para acceder a la pantalla de pago SUBE
document.getElementById('btn-pago-sube').addEventListener('click', () => {
  mostrarPantalla('pagoSube');
});

document.getElementById('btn-qr-pago').addEventListener('click', () => {
  const mensajeQR = document.getElementById('qr-mensaje');
  const botonQR = document.getElementById('btn-qr-pago');

  if (saldo >= 50) {
    saldo -= 50;
    mensajeQR.innerText = `Pago exitoso. Saldo restante: $${saldo.toFixed(2)}`;
    mensajeQR.style.color = 'lime';
    botonQR.disabled = true; // 🛑 Desactiva el botón
  } else {
    mensajeQR.innerText = 'Saldo insuficiente para pagar con QR.';
    mensajeQR.style.color = 'red';
    botonQR.disabled = true; // 🛑 También desactiva si no hay saldo

    // Mostrar el botón de recarga
    const btnRecargar = document.createElement('button');
    btnRecargar.innerText = '¿Desea recargar?';
    btnRecargar.classList.add('boton-recargar');
    btnRecargar.addEventListener('click', () => {
      // Cuando el usuario quiere recargar, lo redirige a la pantalla de recarga
      mostrarPantalla('recarga');
    });

    // Agregar el botón de recarga al mensaje
    mensajeQR.appendChild(btnRecargar);
  }
});

// Botón "SUBE" dentro de la pantalla de pago SUBE
document.getElementById('btn-subir-pago').addEventListener('click', () => {
  const mensajeSaldo = document.getElementById('mensaje-saldo');
  const btnRecargar = document.getElementById('btn-recargar');
  const btnSubirPago = document.getElementById('btn-subir-pago');
  
  // Limpiar los mensajes antes de cada acción
  mensajeSaldo.textContent = '';
  btnRecargar.style.display = 'none';  // Ocultar el botón de recarga antes de tomar cualquier acción
  
  // Verificar si el saldo es suficiente
  if (saldo >= 50) {
    // Si hay saldo suficiente
    saldo -= 50;  // Descontamos $50
    mensajeSaldo.textContent = `Pago realizado exitosamente. Saldo restante: $${saldo.toFixed(2)}`;
    mensajeSaldo.style.color = 'green';  // Mensaje de éxito
    btnSubirPago.disabled = true; // Desactiva el botón
  } else {
    // Si no hay saldo suficiente
    mensajeSaldo.textContent = 'Saldo insuficiente. ';
    mensajeSaldo.style.color = 'red';  // Mensaje de error
    btnRecargar.style.display = 'inline-block';  // Mostrar el botón de recarga
  }
});

// Botón para ir a la pantalla de recarga
document.getElementById('btn-recargar').addEventListener('click', () => {
  mostrarPantalla('recarga');
});

// Botones "Volver"
document.querySelectorAll('.volver').forEach(btn => {
  btn.addEventListener('click', () => {
    mostrarPantalla('inicio');
  });
});

// Dentro de pantalla recarga
document.getElementById('btn-carga-pendiente').addEventListener('click', () => {
  saldo += 100; // Sumamos $100
  const mensaje = document.getElementById('mensaje-recarga');
  mensaje.innerText = `Recarga realizada. Tu nuevo saldo es: $${saldo.toFixed(2)}`;
  mensaje.style.color = 'green'; // Mensaje de éxito
});

document.getElementById('btn-sin-carga-pendiente').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje-recarga');
  mensaje.innerText = 'No hay ninguna recarga disponible en este momento.';
  mensaje.style.color = 'orange'; // Mensaje informativo
});