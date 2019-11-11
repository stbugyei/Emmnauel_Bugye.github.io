
function myFunction() 
{
    document.getElementById("demo").innerHTML = Date();
}

function changeBGC(color) 
{
    document.bgColor=color;
}

function myFunction1()
{
   alert("WELCOME TO MY WORLD!!!");
}

 function add() 
  {
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var c = a + b;
    document.getElementById("solution").innerHTML = c;
  }
    function substract() 
	{
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var c = a - b;
    document.getElementById("solution").innerHTML = c;
  }
    function multiply() 
	{
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var c = a * b;
    document.getElementById("solution").innerHTML = c;
  }
    function divide() 
	{
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var c = a / b;
    document.getElementById("solution").innerHTML = c;
  }
  

var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["studentBIT13"]; 
var pwArray = ["LapUni2014"];  

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
alert ("Login was successful");
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.username.value = "No more tries allowed!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}

}

