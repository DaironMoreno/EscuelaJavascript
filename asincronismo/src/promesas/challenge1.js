let PlayofNumbers = () =>  {
    return new Promise((resolve,reject) => {
                const number = Math.floor(Math.random() * 10);
                console.log(`El numero lanzado es ${number} esperemos a ver que es:`)
                setTimeout(() => {
                    (number) > 5 
                    ? resolve('Ganador') 
                    : reject('Perdedor');
                }, 2000) 
       });
}

PlayofNumbers()
    .then((response) => console.log(response))
    .catch((error)   => console.log(error))