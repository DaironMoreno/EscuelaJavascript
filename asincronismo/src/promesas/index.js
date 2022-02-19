let somethingFunction = () =>{
    return new Promise((resolve,reject) => {
        if(true)
        {
            console.log('Cargando...')
            setTimeout(() => {
                resolve('Listo pana ')
            },5000);
        }else{
            reject('fallo en la matrix pana');
        }
    });
}

somethingFunction()
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error));