//random number generator

//event listeners
document.getElementById('rand-gen').addEventListener('click', generateNumber)

//functions
function generateNumber() {

  //variables
  var min = Number(document.getElementById('min').value);
  var max = Number(document.getElementById('max').value);
  var randNum = document.getElementById('rand-num').innerHTML;
  //errors
  if (min == 0 && max == 0) {
    document.getElementById('rand-error').style.visibility = 'visible';
    document.getElementById('rand-error').innerHTML = "Seriously? Put some values first!";
  } else if (min >= max) {
    document.getElementById('rand-error').style.visibility = 'visible';
    document.getElementById('rand-error').innerHTML = "Can't you read? Make the minimum LOWER than the maximum!";
  } else {

    if (document.getElementById('round').checked == false && document.getElementById('round-value').value <= 0) {
      //no rounding
      document.getElementById('rand-error').style.visibility = 'hidden';
      randNum = Math.random() * (max - min) + min;
    } else if (document.getElementById('round-value').value > 0) {
      //specific amount of decimal places
      document.getElementById('rand-error').style.visibility = 'hidden';
      randNum = Math.random() * (max - min) + min;
      randNum = randNum.toFixed(Number(document.getElementById('round-value').value));
      document.getElementById('round').checked = false;
    } else if (document.getElementById('round').checked == true && document.getElementById('round-value').value <= 0) {
      //whole numbers
      document.getElementById('rand-error').style.visibility = 'hidden';
      randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    }

  }
  //display value
  document.getElementById('rand-num').innerHTML = randNum;
}