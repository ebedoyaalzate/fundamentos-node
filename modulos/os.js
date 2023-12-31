const os = require('os');

// arquitectura
console.log(os.arch());
//sistema operativo
console.log(os.platform());
// nucleos
console.log(os.cpus());

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

//memoria disponible
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

//memoria total
console.log(gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
//console.log(os.networkInterfaces())
