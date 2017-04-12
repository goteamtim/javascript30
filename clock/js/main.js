var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function getCurrentTime(){
    var now = new Date();
    var seconds = now.getSeconds(),
    secondsDegrees = ((seconds/60)*360)+90,
    minutes = now.getMinutes(),
    minutesDegrees = ((minutes/60)*360)+90,
    hour = now.getHours(),
    hoursDegrees = ((hour/12)*360)+90;

    console.log(secondsDegrees)

    hourHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
    minuteHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
}



setInterval(getCurrentTime,1000);