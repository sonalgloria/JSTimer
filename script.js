
const start = document.getElementById("startbtn");
const reset = document.getElementById("resetbtn");
const stop = document.getElementById("stopbtn");

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


start.addEventListener('click',function(){
    var timeVar = setInterval(counterTimer,1000);
    var totalSec = 0;

    function counterTimer(){
        ++totalSec;
        var hour = Math.floor(totalSec / 3600);
        var minute = Math.floor((totalSec - hour*3600)/60);
        var seconds = Math.floor(totalSec - (hour*3600 + minute*60));

        hr.innerText = hour;
        min.innerText = minute;
        sec.innerText = seconds;
    }

    stop.addEventListener('click',function(){
        clearInterval(timeVar);  
         
    })
})

reset.addEventListener('click',function(){
    hr.innerText = "0";
    min.innerText = "0";
    sec.innerText = "0";
})



/*
var counterElem = document.getElementById("time");
var counter = 00;
    
    setInterval(function(){
        counter++;
        counterElem.innerText = counter;
    },2000);

*/

