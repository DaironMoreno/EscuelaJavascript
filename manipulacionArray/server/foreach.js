const agregarBtn = document.getElementById('agregarBtn');


let agregarTarea = () =>{
    let tareas = [];
    const datoTarea = document.querySelector('#DatoTarea');
    let dato = datoTarea.value;
    
    if(dato === ''){
        alert('Agrega una tarea para continuar');
        
    }else{
        
        tareas.push(dato);
    }   
    datoTarea.value = '';
    return tareas;
}




const task = document.getElementById('task');
const lista = document.createElement('ul');
lista.style.listStyleType = 'none';
let itemList = document.createElement('li');
task.appendChild(lista);
itemList.textContent = `No hay tareas agregadas`;
let img = document.createElement('img');
img.src="../src/img/loading-cargando.gif";
img.className = 'Gifimage';
lista.appendChild(itemList);


const taskFunction =  () => {
    
    return new Promise ((resolve,reject) => {
        
        const arrTask = agregarTarea();
        if(arrTask.length == 0){
            reject(new Error('Error logico'));
        }else{
            itemList.className = 'esconder';
            lista.replaceChild(img, itemList);
            setTimeout(() => {
                img.className  = 'esconder';
                resolve(arrTask.forEach(item => {
                    lista.innerHTML += `<li>Tarea: ${item} - Status: <input type='checkbox' ${item.status ? 'checked' : ''} /> </li>`;
                }) )
            },1000);
            task.appendChild(lista); 
            
        }
        return task;

    });
    
} 


agregarBtn.addEventListener('click',taskFunction);