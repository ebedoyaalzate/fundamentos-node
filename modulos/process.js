const p = require('process');

process.on('beforeExit', () => {
  console.log('Tebi, el proceso va a acabae');
});
process.on('exit', () => {
  console.log('Tebi, el proceso acabo');
  setTimeout(() => {
    console.log('Esto nunca se va a ver')
  }, 0);
});

setTimeout(() => {
  console.log('Esto si se va a ver')
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  console.error(err);
  setTimeout(() => {
    console.log('Esto viene de las ecepciones')
  }, 0);
});
// process.on('uncaughtRejection')

functionQueNoExiste()

console.log('Esto si el error no se recoje, no sale')