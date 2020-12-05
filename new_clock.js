const title = document.querySelector('h1');
    title.innerText = 'A Cute Clock'



const clock = document.querySelector('.clock'),
    Clock = clock.querySelector('h2');

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minuites = date.getMinutes();
    const seconds = date.getSeconds();
    const DATE = `${hours < 10 ? `0${hours}`: hours} : ${minuites < 10 ? `0${minuites}`:minuites}`;
    Clock.innerText = DATE;
}

function init(){
    setInterval(getTime, 1000);
}

init();

