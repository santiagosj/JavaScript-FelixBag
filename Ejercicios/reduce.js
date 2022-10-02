// const reduce = (acumulador, valorActual) => nuevoAcumulador

//const reducer = [1, 2].reduce((acc, el) => acc + el, 0)

//console.log(reducer);

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, el) => acc + el, 0) // 15      

// tecnica de indexado
const mascotas = [
    { nombre: 'Archie', edad: 21, tipo: 'perro' },
    { nombre: 'Willy', edad: 16, tipo: 'perro' },
    { nombre: 'Pistolero', edad: 3, tipo: 'gato' },
    { nombre: 'Henry', edad: 2, tipo: 'serpiente' }
]

const indexado = mascotas.reduce(() => ({
    ...acc, // copia del acumulador
    [el.nombre]: el // retorna objeto x el campo nombre
}), {})

console.log(indexado['Willy'])

const arrAnidado = [1[2, 3], 4, [5]]

const arrPlano = arrAnidado.reduce((acc, el) => acc.concat(el), [])

// 1- concat [] -> [1]
// 2- concat [1] -> [2, 3]
// 3- concat [1, 2, 3] -> [4]
// 4- concat [1, 2, 3, 4] -> [5]
// 5- return [1, 2, 3, 4, 5]




