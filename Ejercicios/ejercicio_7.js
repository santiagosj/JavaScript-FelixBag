/**
 * Array ejercicios
 */

// =========================================================================

// reloj de arena
/**
 * @linkProblem https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * @param {*} arr 
 */
function hourGlass(arr) {

    /**
     * @info https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Infinity
     */
    // let maxValue = -Infinity;  
    /**
     *  @info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
     */
    let maxValue = Number.MIN_SAFE_INTEGER

    // begin at y == 0
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 3; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

            // get the middle of hourglass
            sum += arr[y + 1][x + 1];

            // sum the bottom of hourglass
            sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]

            // don't store result to keep space complexity down
            if (maxValue < sum) maxValue = sum;
        }
    }

    return maxValue;
}

// left Rotation
function rotLeft(a, d) {
    let newArr;
    if (a.length !== 0) {
        let rotA = a.slice(d)
        let rotB = a.slice(0, d)
        newArr = rotA.concat(rotB)
    }

    return newArr
}
/**
 * @linkProblem https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
 * 
 * @param {*} q 
 */

function minimumBribes(q) {
    let bribes = 0;

    for (let x = q.length; x >= 1; x--) {
        if (q[x - 1] - 1 > 2) {
            console.log("Too chaotic")
        }

    }

}

// imprimir un string con las primeras letras de cada string en mayusculas

const input = 'Me veras caer como una flecha salvaje'

const getIniciales = (str) => str.split(' ').map(initial => initial[0]).join('').toUpperCase()

getIniciales(input) // => 'MVCCUFS'

// get average function

const arrOfMaidenMembers = [
    { name: 'Bruce', age: 63, specie: 'human' },
    { name: 'Steve', age: 5, specie: 'dog' },
    { name: 'Doug', age: 55, specie: 'human' },
    { name: 'Nicko', age: 8, specie: 'dog' },
    { name: 'Paul', age: 60, specie: 'human' },
]

const getAverageAge = (arr, specie) => {
    const arrOfAges = arr.filter(spec => spec.specie === specie).map(a => a.age)
    return arrOfAges.reduce((a, b) => a + b) / arrOfAges.length
}

//candels, this function should return 

const getMayorRpited = (arr) => {
    const maxValueInArr = Math.max(...arr)
    return arr.filter(candle => candle === maxValueInArr).length
}