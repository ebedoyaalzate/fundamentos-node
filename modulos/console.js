console.log('Algo')
console.error('Algo')
console.warn('Algo')

// ---

const tabla = [
  {
    a: 1,
    b: 'Z',
    c: 'nueba'
  },
  {
    a: 2,
    b: 'B'
  }
]
console.log(tabla)
console.table(tabla)

// ---

console.group('conversacion')
console.log('holas')
console.group('bla')
console.log('bla bla bla')
console.log('bla bla bla')
console.log('bla bla bla')
console.groupEnd('bla')
console.log('adios')
console.groupEnd('conversacion')

console.log('otras cositas')

// ---

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')