/*function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}*/

const santi = {
    nombre: 'Santi',
    saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

santi.saludar(); // Hola mi nombre es Santi 

const saludar = santi.saludar;

saludar() // Hola me llamo undefined

/**This y los eventos */

// Enlazamiento explicito con bind
const boton = document.getElementById("miBoton")
boton.addEventListener('click', santi.saludar.bind(santi))
