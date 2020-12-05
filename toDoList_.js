const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".toDoList");


function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText="X";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length +1;
    span.innerText = text;
    li.appendChild(span); 
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: newId 
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}
const TODOS_LS = 'toDos';

function filterEn(toDo){
    return toDo.id === 1
}

const toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter()
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function toDo (toDo){
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos ();
    toDoForm.addEventListener("submit", handleSubmit);

}

init();



