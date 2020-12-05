const form = document.querySelector('form'),
    input = form.querySelector('input'),
    greeting_ = document.querySelector('h3');

const USER = 'name'
const SHOWING_ON = 'showing'


function saveName(text){
    localStorage.setItem('name', text);
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    greeting(currentValue);
    saveName(currentValue);
}

function askName(){
    form.classList.add(SHOWING_ON)
    form.addEventListener('submit',handleSubmit)
}

function greeting(text){
    form.classList.remove(SHOWING_ON)
    greeting_.classList.add(SHOWING_ON)
    greeting_.innerText = `Hello, ${text}`;
}

function loadName(){
    const userName = localStorage.getItem('name');
    if (userName === null){
        askName();
    } else {
        greeting(userName);
    }
}

function init(){
    loadName();
}

init();






