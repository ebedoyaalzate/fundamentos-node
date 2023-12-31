function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla...');
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('adios, ' + nombre);
      resolve();
    }, 1000);
  });
}

// ---
console.log('Iniciando el proceso');

hola('Carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(nombre => console.log('Terminado el proceso'))
  .catch(error => {
    console.error('Ha habido un error:');
    console.error(error);
  })
