'use strict'
/**
 * call
 * apply
 * bind
 */

/**the problem */

const santi = {
    nombre: 'Santi',
    insta: '@zackMuckerberg',
    saludar: function (gritando, conDespedida) {
        const saludoNormal = `Hola, me llamo ${this.nombre}`;
        const despedidaNormal = 'Chau!';

        const saludo = gritando ? saludoNormal.toLocaleUpperCase() : saludoNormal;
        const despedida = gritando ? despedidaNormal.toLocaleUpperCase() : despedidaNormal;

        console.log(saludo);

        if (conDespedida) console.log(despedida);
    },

};

santi.saludar();

const pepe = { nombre: 'Pepe' }

/**
 * mala idea
 * 
 * pepe.saludar = santi.saludar;
 * 
 * ambas funciones trabajan igual, le pasamos el contexto en el cual queremos se ejecute la fucnion, y los parametros de la funcion a ejecutar
 */
santi.saludar.call(pepe, true, true)
santi.saludar.apply(pepe, [true, true])