const toDoForm = document.querySelector('.toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('ul');

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos(){
localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(){
    const btn = event.target,
        li = btn.parentNode;
    toDoList.removeChild(li);
    
    function filterFn(toDo){
        return toDo.id === li.id
    }
    const cleanToDo = toDos.filter(filterFn);
    toDos = cleanToDo;
    saveToDos();
}

function paintToDo(text){
    const newID = toDos.length + 1,
            li = document.createElement('li'),
            span = document.createElement('span'),
            delBtn = document.createElement('button');
        
    
    span.innerText = text;
    delBtn.innerText = '❌'
    delBtn.addEventListener('click', deleteToDo);

    li.id = newID
    li.appendChild(delBtn)
    li.appendChild(span)
    toDoList.appendChild(li)

    const toDoObj = {
        text: text,
        id: newID
    }

    toDos.push(toDoObj);
    saveToDos();
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function handleSubmit(){
    const currentvalue = toDoInput.value;
    console.log(currentvalue);
    paintToDo(currentvalue);
}

function init(){
    toDoForm.addEventListener('submit', handleSubmit)
    loadToDo();
}

init();