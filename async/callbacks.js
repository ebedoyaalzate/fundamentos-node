function hola(nombre, callback) {
  setTimeout(function() {
    console.log('hola, ' + nombre)
    callback(nombre)
  }, 1000)
}

function adios(nombre, callback) {
  setTimeout(function() {
    console.log('adios, ' + nombre)
    callback()
  }, 1000)
}

console.log('inciando proceso...')

hola('Juan',function (nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso...')
  })
})

