const inputNameForm = document.querySelector('.input'),
    inputName = inputNameForm.querySelector('input'),
    greeting = document.querySelector('.greeting');
 
const USER = 'name';
const SHOWING_ON = 'showing';

function greetingFunc(text){
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello, ${text}`;
}

function saveName(text){
    localStorage.setItem(USER, text);
    
}

function handleSubmit(){
    event.preventDefault();
    currentvalue = inputName.value;
    inputNameForm.classList.remove(SHOWING_ON);
    greetingFunc(currentvalue);
    saveName(currentvalue);    
}

function askForName(){
    inputNameForm.classList.add(SHOWING_ON)
    inputNameForm.addEventListener('submit', handleSubmit)
}

function loadName(){
    const userName = localStorage.getItem(USER)
    if (userName === null){
        askForName();
    }else{
        greetingFunc(userName);
    }
    console.log(userName);
}

function init(){
    loadName();
}

init();
