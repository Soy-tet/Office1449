function timer(){
    var watchtimer = new Date().getTime();
    var dateold = new Date("November 25,2022 20:39:00").getTime();
    var gap = (watchtimer-dateold);
    var Millisecond = 1;
    var second = Millisecond * 1000;
    var minute = second *60;
    var hour = minute * 60;
    var day = hour *24;
    var month = day *30;
    var year = month *12;

    const textcentury = Math.floor(gap/year)
    const textmonth = Math.floor((gap%year)/month)
    const textday = Math.floor((gap%month)/day);
    const texthour = Math.floor((gap%day)/hour);
    const textminute = Math.floor((gap%hour)/minute);
    const textsecond = Math.floor((gap%minute)/second);
    const textMillisecond = Math.floor(gap/Millisecond);


    
    document.querySelector(".century").innerHTML = textcentury;
    document.querySelector(".year").innerHTML = textmonth;
    document.querySelector(".day").innerHTML = textday;
    document.querySelector(".hour").innerHTML = texthour;
    document.querySelector(".minute").innerHTML = textminute;
    document.querySelector(".second").innerHTML = textsecond;
    document.querySelector(".Millisecond").innerHTML = textMillisecond;
    // console.log(textday)
}
setInterval(timer ,1000)