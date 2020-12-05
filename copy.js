const title = document.querySelector("#title");
console.log(title);
console.error("Fuck");
title.innerHTML = 'Hi! From JavaScript';
/*DOM(Document Object Model)
모든 함수들은 DOM형태로 바꿀수 있다
= 페이지에서 JS로 선택한 모든 것은 객체로 변환된다*/

console.dir(title); //title : object
console.log(document);
console.dir(document);
console.log(title2);
console.dir(title2);

title.style.color ='green';
title2.style.color = 'white';
document.title = 'hello'

function handleResize(){
    console.log("I have been resized");
}
function handelClick(){
    title.style.color = 'red';
}

window.addEventListener("resize", handleResize);

title.addEventListener("click",handelClick);

if(0===1){
    console.log('hi');
} else if (10 ==='10') {
    console.log('hey');
} else {
    console.log('ho');
}

if (20>5 && "nico"==='nico') {
    console.log("yes");
} else {
    console.log("no");
}

if (20>5 || "nicol"==='nico') {
    console.log("yes");
} else {
    console.log("no");
    
// &&: and / ||: or
const age = prompt("How old are you?");

if(age>=18 && age<=21){
    console.log("You can drink, but you should not");
} else if(age>21){
    console.log("Enjoy your drink");
} else{
    console.log("Go Home, Kid. You are TOO young!")
}