let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const FetchData = (URl_API) => {
    
    return new Promise((resolve,reject) => {
        const xHttp = new XMLHttpRequest();
        xHttp.open('GET',URl_API,true);
        xHttp.onreadystatechange = (() => {
            if (xHttp.readyState === 4)
            {
                (xHttp.status === 200)
                ? resolve(JSON.parse(xHttp.responseText))
                : reject(new Error('Error ' + URl_API))
            }
        }) ;
        xHttp.send();
    });
}

module.exports = FetchData;