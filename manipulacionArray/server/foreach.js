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


const taskFunction =  () => {
    return new Promise (() => {
        
        const arrTask = agregarTarea();
        const lista = document.createElement('ul');
        lista.style.listStyleType = 'none';
        let itemList = document.createElement('li');
        
        if(arrTask.length  == 0){
            lista.innerHTML = `<li>No hay tareas agregadas -  Borrar  entrada : <input type='checkbox' checked='checked' } /> ?</li>`;
        }else{
            arrTask.forEach(item => {
                lista.innerHTML += `<li>Tarea: ${item} - Status: <input type='checkbox' ${item.status ? 'checked' : ''} /> </li>`;
            })
        }
        task.appendChild(lista);
        return task;

    });
    
} 


agregarBtn.addEventListener('click',taskFunction);