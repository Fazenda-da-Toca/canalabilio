function voltar(){
	window.history.back();
}


//timer
var timeoutID;
 
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
 
    startTimer();
}

setup();

function startTimer() {
    // wait 5 minutes before calling goInactive
    timeoutID = window.setTimeout(goInactive, 360000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}
 
function goInactive() {
    window.location.href="../index.html";
}
 
function goActive() {
    startTimer();
}

function pauseTimer() {
    clearTimeout(timeoutID);
}
