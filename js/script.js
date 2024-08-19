/* ex-1*/ 
function showText(){
	document.getElementById('s_text').innerHTML="Hello SSB";
}

// ex2
function showDate2(){
	document.getElementById('s_date').innerHTML=Date();
}
// ex3
function click3(){
	document.getElementById('demo').innerHTML="Hello JavaScript!";
}
// ex4
function bulbOn4(){
	document.getElementById('img4').src="images/bulbon.gif";
}
function bulbOff4(){
	document.getElementById('img4').src="images/bulboff.gif";
}
// ex5
function bulbOn5(){
	document.getElementById('img5').src="images/bulbon.gif";
}
function bulbOff5(){
	document.getElementById('img5').src="images/bulboff.gif";
}
// ex6
function bulbOn6(){
	document.getElementById('img6').src="images/bulbon.gif";
}
function bulbOff6(){
	document.getElementById('img6').src="images/bulboff.gif";
}
// ex7
function bulbOn7(){
	document.getElementById('img7').src="images/bulbon.gif";
}
function bulbOff7(){
	document.getElementById('img7').src="images/bulboff.gif";
}
// ex8
function bulbOn8(){
	document.getElementById('img8').src="images/bulbon.gif";
}
function bulbOff8(){
	document.getElementById('img8').src="images/bulboff.gif";
}
// ex9
function styleChange9(){
	document.getElementById('css9').style.fontSize='30px';
}
// ex10
function styleChange10(){
	document.getElementById('css10').style.color='blue';
}
// ex11
function styleChange11(){
	document.getElementById('css11').style.display='none';
}
// ex12
function styleChange12(){
	window.print('css12');
}
// ex13
function sum13(){
	document.write(5+6);
}
// ex14
function sum14(){
	document.getElementById('demo14').innerHTML = 5 + 6;
}

// ex15
function myFunction15() {
  document.getElementById("demo15").innerHTML = "Hello Dolly!";
  document.getElementById("demo15a").innerHTML = "How are you?";
}
/* ex-16*/ 
function showText16(){
	document.getElementById('s_text16').innerHTML='Hello SSB';
}
// ex16
function sum16(){
	document.getElementById('demo16').innerHTML = (5 + 6) * 10;
}
// ex17
var x, y, z;
x = 5;
y = 6;
z = x + y;
function dataManipulate17(){
  document.getElementById("demo17").innerHTML =
  "The value of z is: " + z;
}
// ex18
function dataManipulate18(){
var x = 6;
var y = 6;
var z = x + y;
  document.getElementById("demo18").innerHTML =
  "The value of z is: " + z;
}
// ex19
function dataManipulate19(){
let x = 70;
let y = 6;
let z = x + y;
  document.getElementById("demo19").innerHTML =
  "The value of z is: " + z;
}
// ex20
const x1 = 70;
const y1 = 60;
const z1 = x1 + y1;
function dataManipulate20(){
  document.getElementById("demo20").innerHTML =
  "The value of z is: " + z1;
}
// ex21
const x2 = 90;
const y2 = 60;
const z2 = x2 + y2;
function dataManipulate21(){
  document.getElementById("demo21").innerHTML =
  "The value of z is: " + z2;
}
// ex22
var num1, num2, result;
num1 = 32;
num2 = 68;
result = num1 + num2;
function dataManipulate22(){
	document.getElementById('demo22').innerHTML = result;
}
// ex23
let num3, num4, result23;
num3 = 142;
num4 = 58;
result23 = num3 + num4;
function sum23(){
	document.getElementById('demo23').innerHTML = result23;
}
// ex24
let num5, num6;
num5 = 122;
num6 = 58;
num5 += num6;
function sum24(){
	document.getElementById('demo24').innerHTML = num5;
}
// ex25
var data = "My name";
function dataRepeat25(){
	document.getElementById('rep25').innerHTML = data.repeat(3);
}
// ex26
const pi = 3.14;
let person = "jon Reck";
let answer = "I am fine";
function variable26(){
	document.getElementById('demo26').innerHTML = pi + "<br>" + person + "<br>" + answer;
}
// ex27
let carName = "Volvo";
function showText27(){
	document.getElementById('demo27').innerHTML = carName;
}
// ex28
let person1 = "John Doe", carName1 = "Volvo", price = 700;
function showText28(){
	document.getElementById('demo28').innerHTML = price;
}
// ex29
let carName2;
function showText29(){
	document.getElementById('demo29').innerHTML = carName2;
}
// ex30
let x30 = "5" + 2 + 3;
function myResult30(){
	document.getElementById('demo30').innerHTML = x30;
}
// ex31
let x31 = 2 + 3 + "5";
function myResult31(){
	document.getElementById('demo31').innerHTML = x31;
}
// ex32
let $$$ = 200;
let $myMoney = 52;
 function myResult32(){
 document.getElementById("demo32").innerHTML = $$$ + $myMoney;
}
// ex33
let _x = 2;
let _100 = 500;
 function myResult33(){
 document.getElementById("demo33").innerHTML = _x + _100;
}
