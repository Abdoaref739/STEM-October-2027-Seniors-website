let newX = 0, newY =  0, startX = 0, startY = 0;
function makeDraggable(element){
function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}
function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    element.style.top = (element.offsetTop - newY) + "px";
    element.style.left = (element.offsetLeft - newX) + "px";
}
function mouseUp(e){
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}
    element.addEventListener("mousedown", mouseDown);
}
makeDraggable(document.getElementById("sticker1"));
makeDraggable(document.getElementById("sticker2"));
makeDraggable(document.getElementById("sticker3"));
makeDraggable(document.getElementById("sticker4"));
makeDraggable(document.getElementById("sticker5"));
makeDraggable(document.getElementById("sticker6"));
makeDraggable(document.getElementById("sticker7"));
makeDraggable(document.getElementById("sticker8"));
makeDraggable(document.getElementById("sticker9"));
makeDraggable(document.getElementById("sticker10"));


let daysCountDown = document.querySelector(".days-countdown-counter");
let hoursCountdown = document.querySelector(".hours-countdown-counter");
let minutesCountdown = document.querySelector(".minutes-countdown-counter");
let secondsCountdown = document.querySelector(".seconds-countdown-counter");
var progressBar = document.getElementById("progressbar");
var progressbarText = document.querySelector(".progressbar-text");
var FinalDate = new Date("Jul 30, 2027 23:59:59").getTime();
var dateDiff;
setInterval(() =>{
//countdown logic
let currentDate = new Date().getTime();
dateDiff = FinalDate - currentDate;
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
daysCountDown.innerHTML = days;
hoursCountdown.innerHTML = hours;
minutesCountdown.innerHTML = minutes;
secondsCountdown.innerHTML = seconds;

var progress = Math.floor((dateDiff / FinalDate) * 100);
console.log(progress)
progressBar.style.width  = progress + "px";
progressbarText.innerHTML = progress + "%";
}, 1000);


//progressbar logic




//developercard logic
let developerCard = document.getElementById("developer-card");
let developerImage = document.getElementById("developer-image");

developerCard.addEventListener("mouseover", function(){
    developerImage.src = "./images/waving-developer.png";
    developerImage.style.marginTop = "-220px";
    developerImage.style.marginLeft = "30px";
});

developerCard.addEventListener("mouseout", function(){
    developerImage.src = "./images/developer-image.png";
    developerImage.style.marginTop = "-132px";
    developerImage.style.marginRight = "40px";
});