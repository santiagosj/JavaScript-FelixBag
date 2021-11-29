const santi = {
    nombre: 'santi',
    saludar: function () {
        console.log(`hola yo soy ${this.nombre}`)
    },
    hermano: {
        nombre: 'Nico',
        saludar: function () {
            console.log(`Hola yo soy ${this.nombre}`)
        }
    }
}

santi.saludar();
santi.hermano.saludar();