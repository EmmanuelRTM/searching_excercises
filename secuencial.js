function busquedaSecuencial(array, element){
    //Vector-array
    //emento a buscar
    //tmaaño del array
    var tamano = array.length

    for(var i= 0 ; i< tamano;i++){
        //console.log(miArray[i])
        if (array[i]===element){
            return i
        }
    }
    return -1
}

const miArray= [3,4,7,8,2,10,5,6]
console.log(busquedaSecuencial(miArray,10))