//1 En ecma script 6 pasamos parametros por default de la siguiente manera
function MostrarDatos(name = "dairon", country = "tachira", age = "30"){
    console.log(`hola ${name} Tu eres de ${country} y tienes ${age}`)
}
MostrarDatos();
MostrarDatos('vanesa','el barrio de la boca',42);

//2 podemos escribir texto multilinea usando las comillas fransesas
let lorem = ` epale que mas 
como va todo carajito`;

const DatosPersona = {
    'name' : 'Dairon',
    'country' : 'Tachira',
    'age' : 30
}
let { name , country, age} = DatosPersona;
console.log(`hola ${name} Tu eres de ${country} y tienes ${age}`); 



{
    var prueba = "valor de prueba";
    let prueba2 = "valor de prueba2";
}
prueba = "le cambio el valor afuera a var";
const prueba3 = "valor de la constante";
prueba3 = "le cambie el valor a la constante";
console.log(prueba3);
// 3 cuando le voy  a asignar un valor a un objeto esta y la propiedad se llama como el valor
//no es necesario colocarlo ejem

let obj = {
    name,
    age
} 
console.log(obj)

const HelloPromise = () =>{
    return new Promise((resolve,reject) => {
        if(false){
            resolve("todo fino pana")
        }else{
            reject("nada todo mal ");
        }
    })
}

HelloPromise()
    .then(response => { console.log(response)})
    .catch(error => {console.log(error)})

    // 5 se ven clases en js 
    
    class calculaciones{
        constructor()
        {
            this.valor1 = 0;
            this.valor2 = 0;
        }

         sum (valor1,valor2){
             this.valor1 = valor1;
             this.valor2 = valor2;
            return this.valor1 + this.valor2;
        }

    }

    const sumatoria = new calculaciones();
    console.log(sumatoria.sum(2,6));

    // 6 ES 7 se agrego el metodo includes para buscar algo en un array

    let arr = [1,2,3,4,5];
    let busqueda = arr.includes(6);
    if(busqueda)
    {
        console.log("si esta")
    }else {
        console.log(" no esta")

    }
    // 7 ES8 se agrego async - await y object.entries y object.values
    //object.entries me crea un array con arrays por cada par de un objeto
    let data = {
        'name': 'dairon',
        'apellido' : 'moreno',
        'ciudad' : 'Barrio de la boca'
    }

    const entries = Object.entries(data);
    console.log(entries);
    //object.values me crea un array con los valores de un objeto
    let data = {
        'name': 'dairon',
        'apellido' : 'moreno',
        'ciudad' : 'Barrio de la boca'
    }
    const values = Object.values(data);
    console.log(values);
    // async - await

    const helloWord =  () => {
        return new Promise((resolve,reject) => {
            (true)
                ? setTimeout(() => resolve('Todo fino pana'),3000 )
                : reject(new Error('Error nada mas'))
        });
    }

    let helloAsync = async () => {
        const saludar = await helloWord();
        console.log(saludar);
    }

    helloAsync();

    const anotherFunction = async () => {
        try {
            const hello = await helloWord();
            console.log(hello)
        } catch (error) {
            console.log(error)
            
        }
    }

    anotherFunction();