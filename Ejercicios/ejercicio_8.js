/***
 * oredenando un array de objetos por lastName
 */

var a = [
    { FirsName: "Ellie", LastName: "Williams" },
    { FirstName: "Lara", LastName: "Croft" }
];

function SortArray(x, y) {
    if (x.LastName < y.LastName) { return -1; }
    if (x.LastName > y.LastName) { return 1; }
    return 0;
}

var s = a.sort(SortArray);
console.log(s);

/**
 * ejercicios tipo quize -EASY level-
 */

// const array = [1,2,3];
// const result = array[3] // undefined 

/*-----------------------------------*/

// const obj = Object.assign({ name: 'JavaScript' }, { name: 'ECMAScript' }, { name: 'LiveScript' });
// const result = obj.name;
// console.log(result) // LiveScript

/**---------------------------------- */

// const array = [1, 2, 3, 4, 5]
// const result = array.indexOf(3)
// console.log(result);

/**---------------------------------- */

// const o = {
//     name: 'Santi'
// };
// const s = JSON.parse(JSON.stringify(o));
// const result = s === o;

// console.log(result); // false

/**----------------------------------- */

// const result = "2009" - "1995"
// console.log(result);

/**----------------------------------- */

const re = /java/i;
const str = "Javascript";
const result = re.test(str);
console.log(result);

// funcion para separar un array en arrays 

const chunkArray = (arr, size) =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr]

const suma = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}        