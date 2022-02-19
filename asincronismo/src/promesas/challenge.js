let FetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'


FetchData(API)
    .then(response => {
        console.log(`Total de Personajes: ${response.info.count}`)
        return FetchData(`${API}${response.results[0].id}`)
    })
    .then(response => {
        console.log(`Nombre: ${response.name}`)
        console.log(`Especie: ${response.species}`)
        console.log(`Genero: ${response.gender}`)
        return FetchData(response.origin.url)
    })
    .then(response => {
        console.log(`Localización: ${response.name}`)
        console.log(`Tipo: ${response.type}`)
        console.log(`Dimension: ${response.dimension}`)
    })
    .catch(error => console.log(error))