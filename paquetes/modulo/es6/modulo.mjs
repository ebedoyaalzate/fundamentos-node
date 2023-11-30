function saludar() {
  console.log('Hola mundo');
}

export default {
  saludar,
  prop1: 'soy un modulo experimental'
};

// node --experimental-modules modulo/es6/index.mjs 