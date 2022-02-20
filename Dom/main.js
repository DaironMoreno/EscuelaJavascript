// asi tomamos un ID
let main = document.getElementById('main')

//main.style.backgroundColor = "green";

// asi tomamos una clase
//let articulo = document.getElementsByClassName('article.articulo')
let articulo = document.querySelector('article.articulo')

let h3 = document.createElement('h3');
// el AppendChild me va a agregar  un modulo al final siempre, podemos usar solo append
//append le puedes pasar texto y no usar createTextNode
//articulo.appendChild(h3)
let texto = document.createTextNode('el titulo calida')
//h3.appendChild(texto)
h3.append(texto)
let parrafoArticulo = document.querySelector('.parrafoArticulo')
articulo.insertBefore(h3,parrafoArticulo);


h3.style.color = "green"
// asi lo traemos por etiqueta

let eti = document.getElementsByTagName('p')
// seleccionar ID o Class

let titulo = document.querySelector('.texto');
//titulo.style.color = "blue";

/* query selectorAll nos devuelve un nodeList
hay que tener en cuenta que un nodeList se diferencia de una array
una de las principales diferencias es que no tiene los mismos Metodos que
un array, para eso lo mejor es guardar el nodeList en una varia
y luego la variable la guardas en un array 
usando el ... spread operator o
la siguiente sintaxis 
Array.from(nodeList)
 
insertar elementos donde queramos en el elementos
parentElement.insertAdjacentElement(): Inserta nodos según las opciones que le pasemos:
beforebegin: Lo inserta antes del nodo
afterbegin: Lo inserta despues del nodo
beforeend: Lo inserta antes de donde finaliza el nodo
afterend: Lo inserta después de donde finaliza el nodo*/
