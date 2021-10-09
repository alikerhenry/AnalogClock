const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function startTimer(){
    
    var date = new Date();
    
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var myInterval = setInterval(startTimer,1000);