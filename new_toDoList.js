const toDoList = document.querySelector('.toDoList'),
    inputForm = document.querySelector('.toDoForm'),
    toDoInput = inputForm.querySelector('input');

let toDos = [];
const TODOS_LS = 'toDos';



function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
   
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    }
    const cleanToDos = toDos.filter(filterFn);
    toDos = cleanToDos;
    saveToDos();
} 



function paintToDo(text){
    const newId = toDos.length + 1;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    

    delBtn.innerText = '❌';
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj)
    
    saveToDos();
}

function loadToDos(){
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if(loadedToDo !== null){
        const parsedToDos =JSON.parse(loadedToDo);
        parsedToDos.forEach(function toDO (toDo) {
        paintToDo(toDo.text);
      });
    }
}


function handleSubmit(){
    const currentvalue = toDoInput.value;
    paintToDo(currentvalue);
}

function init(){
    loadToDos();
    inputForm.addEventListener('submit',handleSubmit)
}

init();
