function otraFuncion() {
  return serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi async function pa')
      cb(err)
    }
  }, 1000);
}

try {
  //otraFuncion();
  seRompeAsync(function(err) {
    console.log(err.message)
  });
} catch (e) {
  console.error('Algo se ha roto mi fai...');
  console.error(e.message);
  console.log('No pasa nada, tranquis que lo cogimos');
}

console.log('Esto esta al final');
