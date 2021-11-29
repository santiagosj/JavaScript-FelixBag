'use strict'

function quienSoy() {
    console.log(`Hola, yo soy ${this}`)
}

quienSoy(); // por el uso de use strict esto imprime Hola, yo soy undefined
