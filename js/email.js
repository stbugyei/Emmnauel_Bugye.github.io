function hideform(){
/*Hides the div with name form*/
var txt='<p><input type="button" id="submit" value="Access BMI Form" onclick="showform()"></p>';
document.getElementById("form").style.visibility="hidden";
document.getElementById("enclose").innerHTML=txt;
document.getElementById("form").style.height="0px";
document.getElementById("info").style.borderTop="1px dotted black";
document.getElementById("enclose").style.borderTop="1px dotted black";
}
function showform(){
/*Shows the div with name form*/
var txt='<input type="button" id="submit" value="Hide BMI Form"  onclick="hideform()"></p>';
document.getElementById("form").style.visibility="visible";
document.getElementById("enclose").innerHTML=txt;
document.getElementById("form").style.height="500px";
}
var obvars=0; //this counts the number of obligatory fields filled correctly
var helpOn=false; //help-div on or off
function showhelp(){
if(helpOn==false){
helpOn=true;
var txt='<p>This is the part to display the </p><p>condition of the agreement.</p>';
document.getElementById("help").innerHTML=txt;
document.getElementById("help").style.width="200px";
document.getElementById("help").style.position="absolute";
document.getElementById("help").style.left="710px";
document.getElementById("help").style.bottom="300px";
document.getElementById("help").style.border="4px solid #eeeeee";
document.getElementById("help").style.visibility="visible";

}else{
helpOn=false;
document.getElementById("help").innerHTML='';
document.getElementById("help").style.visibility="hidden";
}
}
function hasvalue(value,field){
/*checks if the field in function call has a value*/
if(value==''){
//no value in field
document.getElementById(field.name+'_error').innerHTML='<font color="red">Enter value here!</font>';
}else{
//value ok
obvars++; //add the count of correct fields
document.getElementById(field.name+'_error').innerHTML='<img src="images/Button.png" />';
}
}
function hasvalue1(value,field){
/*checks if the field in function call has a value*/
if(value==''){
//no value in field
document.getElementById(field.name1+'_error').innerHTML='<font color="red">Enter value here!</font>';
}else{
//value ok
obvars++; //add the count of correct fields
document.getElementById(field.name1+'_error').innerHTML='<img src="images/Button.png" />';
}
}
function isnumber(value,field){
/*checks that the field in function call is a number*/
if(isNaN(value) || value==''){
document.getElementById(field.name+'_error').innerHTML='<font color="red">Enter number</font>';
}else{
obvars++; //add the count of correct fields
document.getElementById(field.name+'_error').innerHTML='<img src="images/Button.png" />';
}
}
function buttonfalse(){
document.getElementById("submit").disabled=true;
document.getElementById("helpdiv").style.cursor="pointer";
}
function isready(){
//if obvars>=8, everything should be ok
if(obvars>=7) document.getElementById("submit").disabled=false;
else document.getElementById("agreement").innerHTML='<input type="checkbox" id="agree" name="agree" onclick="isready()" />';
}
function calcBmi(){	
	var h = document.getElementById("height").value;
	var w = document.getElementById("weight").value;
	var displaybmi=Math.round(w/(h*h)*10000); 
	document.getElementById("answer").value  = displaybmi; 
}
function isEmail(field,emailaddress) {
var status = false;
if (emailaddress != undefined && emailaddress.length > 4) {
var atCount = 0;
var atIndex = 0;
var dotCount = 0;
var dotIndex = 0;
var strArray = emailaddress.split('');

for (var i = 0; i < strArray.length; i++) {
if (strArray[i] == '@') {
atIndex = i;
atCount++;
}

if (strArray[i] == '.') {
dotIndex = i;
dotCount++;
}
}

if (atCount == 1 && atIndex > 0 && atIndex < dotIndex && dotIndex > 0 && dotIndex < strArray.length) {
status = true;
}
}
if(!status) document.getElementById(field.name+'_error').innerHTML='<font color="red">Check email!</font>';
else{
document.getElementById(field.name+'_error').innerHTML='<img src="images/Button.png" />';
obVars++;
}
}