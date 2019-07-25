//timer
//variables
var myTimer;
var buttonStart = document.getElementById('button-start1');
var buttonStop = document.getElementById('button-stop1');
var buttonReset = document.getElementById('button-reset1');
var alarm = new Audio('alarm.mp3');

//functions
function clock() {
  //inputs
  myTimer = setInterval(myClock, 10);
  var secs = Number(document.getElementById('sec-input').value);
  var mins = Number(document.getElementById('min-input').value);
  var hrs = Number(document.getElementById('hr-input').value);
  var c = (secs * 100) + (mins * 6000) + (hrs * 3.6e+5);

  function myClock() {
    // disable overlay
    off();
    //start counting down
    c--;
    //proper size of time unit
    var tens = c % 100;
    var seconds = (c - tens) / 100;
    var secondsLeft = seconds % 60; // Seconds that cannot be written in minutes
    var minutesLeft = (Math.floor((seconds - secondsLeft) / 60)) % 60; // Minutes that cannot be written in hours
    var hoursLeft = Math.floor(c / 3.6e+5);
    // add zeros precending the number if below 10
    if (tens < 10) {
      tens = '0' + tens;
    }
    if (secondsLeft < 10) {
      secondsLeft = '0' + secondsLeft;
    }
    if (minutesLeft < 10) {
      minutesLeft = '0' + minutesLeft;
    }
    if (hoursLeft < 10) {
      hoursLeft = '0' + hoursLeft;
    }
    //display timer
    document.getElementById('timer').innerHTML = hoursLeft + ":" + minutesLeft + ":" + secondsLeft + ":" + tens;
    //say time's up and play alarm once finished
    if (c <= 0) {
      clearInterval(myTimer);
      document.getElementById('timer').innerHTML = "Time's up!";
      alarm.play();
    }
  }
}

//start button
buttonStart.onclick = function () {
  if (document.getElementById('sec-input').value == 0 && document.getElementById('min-input').value == 0 && document.getElementById('hr-input').value == 0) {
    //if values are null
    document.getElementById('timer-error').style.visibility = 'visible';
    document.getElementById('timer-error').innerHTML = "Really? Fill in at least ONE value!";
  } else {
    //start 3s countdown and start timer after
    on();
    countDown();
    setTimeout(function () {
      document.getElementById('timer-error').style.visibility = 'hidden';
      clearInterval(myTimer);
      clock();
    }, 2950);

  }

}
//stop timer and/or stop alarm
buttonStop.onclick = function () {
  clearInterval(myTimer);
  alarm.pause();
}

//reset laps, timer, inputs, and alarm
buttonReset.onclick = function () {
  document.getElementById('timer').innerHTML = "00:00:00:00";
  alarm.pause();
  document.getElementById('hr-input').value = null;
  document.getElementById('min-input').value = null;
  document.getElementById('sec-input').value = null;
}

//display overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

// no overlay
function off() {
  document.getElementById("overlay").style.display = "none";
}

//3 second countdown
function countDown() {
  var timeleft = 2;
  var downloadTimer = setInterval(function () {
    document.getElementById("text").innerHTML = timeleft;
    timeleft -= 1;
    if (timeleft <= -1) {
      clearInterval(downloadTimer);
      document.getElementById("text").innerHTML = "3"
    }
  }, 1000);
  timeleft = 2;
}