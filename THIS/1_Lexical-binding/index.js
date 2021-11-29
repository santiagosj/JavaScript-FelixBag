'use strict'
/**
 * enlazamiento lexico, solucion a la problematica anteriormente expuesta...
 */
const santi = {
    nombre: 'Santi',
    insta: '@zackMuckerberg',
    saludar: function () {
        const seguimeEnInsta = () => {
            console.log(`Seguime en Insta: ${this.insta}`);
        }
        console.log(`Hola me llamo ${this.nombre}`);
        seguimeEnInsta()
    },

};