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

async function main(){
  const nombre = 'Juan'
  await hola(nombre)
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Termina el proceso')
}

console.log('Empezamos el proceso')
main()