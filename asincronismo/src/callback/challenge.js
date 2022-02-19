let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const api_url = 'https://rickandmortyapi.com/api/character/';

function fetchData(URL,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',URL,true);
    xhttp.onreadystatechange = function(e){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200)
            {
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('error' + URL);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

fetchData(api_url,function(error1,data1){
    if(error1) return console.log(error1)
        //console.log(data1)me trae todos los personajes de la Api
        fetchData(api_url + data1.results[0].id, function(error2,data2){
            console.log(data2) // me trae solo el personaje de la posicion 0
            if(error2) return console.log(error2)
            fetchData(data2.origin.url,function(error3,data3){
                console.log(data3)
                if(error3) return console.log(error3)
                    console.log(data1.info.count);
                    console.log(data2.name);
                    console.log(data3.dimension);
            })
        })
    
})