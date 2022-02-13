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