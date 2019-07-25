//stopwatch
window.onload = function () {

  //variables
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var tens = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonLap = document.getElementById('button-lap');
  var laps = document.getElementById('laps');
  var Interval;

  buttonStart.onclick = function () {
    //start
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    //stop
    clearInterval(Interval);
  }


  buttonReset.onclick = function () {
    //reset and clear everything
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
    laps.innerHTML = '';
  }

  buttonLap.onclick = function () {
    //record lap
    laps.innerHTML += "<li>" + appendHours.innerHTML + ":" + appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendTens.innerHTML + "</li>";
  }

  function startTimer() {
    //start the stopwatch
    tens++;
    // cap each time unit to limit (59 or 99), reset to 0, and transfer 1 to the next time unit
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

    if (minutes > 59) {
      hours++;
      appendHours.innerHTML = "0" + hours;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
    }

    if (hours > 9) {
      appendHours.innerHTML = hours;
    }
  }
}