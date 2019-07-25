//calculator

//events for each button
document.getElementById('pi').addEventListener('click', insertPi);
document.getElementById('par1').addEventListener('click', par1);
document.getElementById('par2').addEventListener('click', par2);
document.getElementById('sqrt').addEventListener('click', squareRoot);
document.getElementById('one').addEventListener('click', one);
document.getElementById('two').addEventListener('click', two);
document.getElementById('three').addEventListener('click', three);
document.getElementById('four').addEventListener('click', four);
document.getElementById('five').addEventListener('click', five);
document.getElementById('six').addEventListener('click', six);
document.getElementById('seven').addEventListener('click', seven);
document.getElementById('eight').addEventListener('click', eight);
document.getElementById('nine').addEventListener('click', nine);
document.getElementById('zero').addEventListener('click', zero);
document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);
document.getElementById('decimal').addEventListener('click', decimal);
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equal').addEventListener('click', equal);
document.getElementById('back').addEventListener('click', backSpace);

var display = document.getElementById('calculator-display');

//functions
function insertPi() {
  display.value += Math.PI;
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function par1() {
  display.value += '(';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function par2() {
  display.value += ')';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}


function one() {

  display.value += '1';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function two() {
  display.value += '2';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function three() {
  display.value += '3';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function four() {
  display.value += '4';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function five() {
  display.value += '5';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function six() {
  display.value += '6';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function seven() {
  display.value += '7';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function eight() {
  display.value += '8';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function nine() {
  display.value += '9';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function zero() {
  display.value += '0';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function add() {
  display.value += '+';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function sub() {
  display.value += '-';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function mul() {
  display.value += '*';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function div() {
  display.value += '/';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function clearDisplay() {
  display.value = '';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function decimal() {
  display.value += '.';
  //preview text
  document.getElementById('preview-ans').setAttribute('preview', 'Ans = ' + eval(display.value));
}

function backSpace() {
  var value = document.getElementById("calculator-display").value;
  document.getElementById("calculator-display").value = value.substr(0, value.length - 1);
}


function equal() {
  //error message
  try {
    display.value = eval(display.value);

  } catch (e) {
    if (e instanceof SyntaxError) {
      alert(e.message);
    } else {
      throw (e);
    }
  }
}


//tabbed content

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();