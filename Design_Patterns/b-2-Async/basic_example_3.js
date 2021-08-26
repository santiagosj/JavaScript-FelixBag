/*fetch('https://api.chucknorris.io/jokes/random')
.then((response)=>{
    return response.json()
})
.then((data)=>{
   // console.log("Data is: ", data)
   var joke = data.value
   console.log('JOKE: ',joke)
})
.catch((err)=>{
    console.error(err)
})*/

const uno = () => {
    console.log("uno")
}

const dos = () => {
    return new Promise((resolve,reject)=>{
        resolve()
        setTimeout(()=>{
            console.log("dos")
        },4000)
    })
}

const tres = () => {
    setTimeout(()=>{
        console.log("tres") 
    },3000)
}

const cuatro = () => {
    console.log("cuatro")
}

const cinco = () => {
    setTimeout(()=>{
        console.log("cinco") 
    },2000)
}

uno()
dos().then(()=>{
    tres()
}).then(()=>{
    cuatro()
}).then(()=>{
    cinco()
})
