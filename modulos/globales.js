//console.log(global)
let i = 0;
// let intervalo = setInterval(() => {
//   console.log('hola');
//   if (i === 3) {
//     clearInterval(intervalo)
//   }
//   i++
// }, 1000);

setImmediate(function (){
  console.log('hola')
})


console.log(__dirname)
console.log(__filename)