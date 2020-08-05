miArray=[1,2,3,4,5,6,7,8,9,10,11,12,13]

function binarySearch(array,element){
    var min =0
    var max= array.length;
    var aux;

    while (min<=max){
        aux = Math.floor( ( max + min ) /2)
        if(array[aux] === element){
            return aux;

        } else if(array[aux]<element) {
            min = aux+1;

        } else {
            max = aux-1;
        }
    }

    return -1;
}

console.log(binarySearch(miArray,11));
