const inputBox = document.getElementById("input-box"); //creamos variable de este elemto
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){ //si está vacía se lanza este mensaje
        alert('Tienes que escribir algo');
    }
    else{
        let li = document.createElement("li");//si no, se crea el elemento html li con el valor que se a introducido
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //como queremos que se cree una cruz para poder eliminar la tarea:
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //este es el next, cuando pase lo anterior el imput volverá a estar vacío
    saveData();//guardará datos
}

listContainer.addEventListener("click", function(e){//esta funcion va a hacer los cambios
    if(e.target.tagName === "LI"){//si se clica en elemento li, se tacha
        e.target.classList.toggle("checked");
        saveData();//guardará datos
    
    }
    else if (e.target.tagName === "SPAN"){//si se clica en pan, se borra
        e.target.parentElement.remove();
        saveData();//guardará datos
    }
},false);


//funcion para guardar los datos en localStorage, se va a gusrdar en nuestro browser con nombre data

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


//esto nos va a mostrar todo lo que haya guardado con el nombre de data

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();