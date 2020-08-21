
/**1 .- Crear una función que encuentre el número más repetido en un array
	Ej. Input - [6,1,8,2,3,6,3,2,5,6]
    Salida -> 6*/

    let list_for_mod=[6,1,8,2,3,6,3,2,5,6]
    console.log("input: ",list_for_mod)

    function calculate_most_repeated_value(list){
        var aux=[]
        //Get th number of times that an element is repeated
        for(var i = 0; i<list.length; i++){
            if (aux[list[i]]>=0){
                aux[list[i]]++;
            }else{
                aux[list[i]]=1;
            }
        }
        var maxNumber=0;
        var maxPosition=0;
        for (var i=0 ; i< aux.length ;i++){
            if(aux[i]>maxNumber){
                maxNumber=aux[i];
                maxPosition=i;
            }
        }
        return maxPosition
    }
    var moda=calculate_most_repeated_value(list_for_mod)
    console.log("Salida--> ",moda)
    //crear array auxiliar que cuente

   // aux[num]++
    //crear array de ordenamiento

    //Input - [6,1,8,2,3,6,3,2,5,6]
   //Salida -> 6*/cleaa


    /*
    2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
        Ej input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
        Salida → ['e','a','d','f']*/
        function getLetters(array){
            var longitud= array.length;
            var letters=[]
            for(var i = 0;i < longitud;i++){
                if( !(array[i]<0 || array[i]>=0) ){
                    letters.push(array[i])
                }
            }
            return letters;
        }
    
        var miArray3=[8,'e',7,2,'a','d','f',2,3,1,4,3]
        console.log("Salida---> ",getLetters(miArray3));
        
    /*
    3.- Crear una función que busque el numero más grande en un arreglo
        Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
        Salida -> 12*/
        function locateMax(array){
            var longitude = array.length;
            var aux=0
            for (var i =1; i < longitude; i++){
                if(array[i]>array[aux]){
                    aux=i;
                }
            }
            return aux;
        }
        var miArray4=[1,4,7,2,4,1,9,4,0,2,4,5,12]
        
        console.log("MAX: ",miArray4[locateMax(miArray4)]);
    /*
    4.- Crear una función que busque el numero más pequeño en el arreglo
        Ej. [1,4,5,-1,-7,2,3,9]
        Salida -->  -7*/
        function locateMin(array){
            var longitude = array.length;
            var aux=0
            for (var i =1; i < longitude; i++){
                if(array[i]<array[aux]){
                    aux=i;
                }
            }
            return aux;
        }

        var miArray5=[1,4,5,-1,-7,2,3,9]
        console.log("MIN: ",miArray5[locateMin(miArray5)]);
    
        /*
    5.- Crear una clase llamada  Contacto con los siguientes datos
    Nombre 
    Apellidos
    Telefono

    Después crear una clase que sea ListaContactos la cual tendrá dos métodos
    Agregar un contacto
    Buscar un contacto por nombre */

    class Contacto{
        constructor(name,lastName,phone){
            this.name=name;
            this.lastName=lastName;
            this.phone=phone;
        }
    }
    class ListaContactos{
        constructor(){
            this.lista =[];
        }
        addContact(e){
            this.lista.push(e);
        }
        searchByNameAndGivePosition(nombre){
            //Vector-array
            //emento a buscar
            //tmaaño del array
            var array= this.lista;
            var tamano = array.length;
            for(var i= 0 ; i< tamano;i++){
                //console.log(array[i].name) 
                if (array[i].name==nombre){
                    return i;
                }
            }
            return -1
        }
    }

    var contact1= new Contacto("Pedro","Sanchez",9981156788)
    var contact2= new Contacto("Paco","Trejo",9984643)
    var contact3= new Contacto("Juan","Ñunez",23462365)
    var contact4= new Contacto("Jose","Yammaha",146134613)
    var contact5= new Contacto("Manolo","Tapia",1346146)

    var mylistContact = new ListaContactos();
    mylistContact.addContact(contact1)
    mylistContact.addContact(contact2)
    mylistContact.addContact(contact3)
    mylistContact.addContact(contact4)
    mylistContact.addContact(contact5)
    
    var positionJose=mylistContact.searchByNameAndGivePosition("Jose");

    console.log(mylistContact.lista[positionJose])