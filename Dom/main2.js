let main = document.getElementById('main');
let articulo = document.querySelector('article.articulo');
let parrafoArticulo = document.querySelector('.parrafoArticulo');
parrafoArticulo.innerHTML = "nuevo articulo";
let texto = parrafoArticulo.outerHTML.replace('nuevo articulo', 'articulo mucho mejor');
parrafoArticulo.innerHTML = texto;
let p = document.querySelector('p');
let titulo = document.querySelector('.titulo');
/* console.log(articulo.outerHTML);
console.log(parrafoArticulo.innerHTML); */
//eliminamos el hijo directo de esta manera
//main.removeChild(articulo);

titulo.remove()