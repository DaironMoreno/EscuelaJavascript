let articulo = document.querySelector('article.articulo');
let parrafoArticulo = document.querySelector('.parrafoArticulo');
parrafoArticulo.innerHTML = "nuevo articulo";
let texto = parrafoArticulo.outerHTML.replace('nuevo articulo', 'articulo mucho mejor');
parrafoArticulo.innerHTML = texto;
/* console.log(articulo.outerHTML);
console.log(parrafoArticulo.innerHTML); */