function hola(nombre, callback) {
  setTimeout(function () {
    console.log('hola, ' + nombre);
    callback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(function () {
    console.log('adios, ' + nombre);
    callback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback)
  }
}



console.log('inciando proceso...');

hola('Juan', function (nombre) {
  conversacion(nombre, 4,  function () {
    console.log('terminamos');
  });
});
// hola('Juan', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log('Terminando proceso...');
//         });
//       });
//     });
//   });
// });
