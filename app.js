var min = 0;
var sec = 0;
var mesc = 0;

var get1 = document.getElementById('min');
var get2 = document.getElementById('sec');
var get3 = document.getElementById('mesc');
var InterVal;

function timer() {
    mesc++;
    get3.innerHTML = mesc;

    if (mesc >= 100) {
        sec++;
        get2.innerHTML = sec;
        mesc = 0;

    } else if (sec >= 60) {
        min++
        get1.innerHTML = min;
        sec = 0;


    }


}

function start() {

    InterVal = setInterval(timer, 10);
    
}


function stop() {

    clearInterval(InterVal);

}

function reset() {

    min = 0;
    sec = 0;
    mesc = 0;
    get1.innerHTML = min;
    get2.innerHTML = sec;
    get3.innerHTML = mesc;
    stop();

}

var num = Math.random()*100;