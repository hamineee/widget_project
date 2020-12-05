const clockForm = document.querySelector('.clock'),
    clock = clockForm.querySelector('h2');

function getTime(){
    const date = new Date
    const hours= date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    const TIME = `${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}`:minutes}`;

    clock.innerText = TIME;
}

function init(){
    setInterval(getTime, 1000)
}

init();
