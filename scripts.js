window.onload = function() {
  console.log("El archivo JS se cargó correctamente.");
  alert("Archivo JS cargado correctamente.");
}

if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Registro de SW exitoso', reg))
        .catch(err => console.warn('Error al registrar el SW', err));
}
