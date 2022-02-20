// asi tomamos un ID
let main = document.getElementById('main')

main.style.backgroundColor = "green";

// asi tomamos una clase
let articulo = document.getElementsByClassName('texto')

// asi lo traemos por etiqueta

let eti = document.getElementsByTagName('p')
// seleccionar ID o Class

let titulo = document.querySelector('.texto');
titulo.style.color = "blue";

/* query selector nos devuelve un nodeList
hay que tener en cuenta que un nodeList se diferencia de una array
una de las principales diferencias es que no tiene los mismos Metodos que
un array, para eso lo mejor es guardar el nodeList en una varia
y luego la variable la guardas en un array 
 */