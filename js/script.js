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
// ex34
let a = 5;
let x34 = (100 + 50) * a;
function myResult34(){
	document.getElementById('demo34').innerHTML = x34;
}
// ex35
let num7, num8;
num7 = 76;
num8 = 89;
num7 -= num8;
function myResult35(){
	document.getElementById('demo35').innerHTML = num7;
}
// ex36
let num9, num10;
num9 = 90;
num10 = 76;
num9 *= num10;
function myResult36(){
	document.getElementById('demo36').innerHTML = num9;
}
// ex37
let num11, num12;
num11 = 90;
num12 = 76;
num11 /= num12;
function myResult37(){
	document.getElementById('demo37').innerHTML = num11;
}
// ex38
let num13, num14;
num13 = 92;
num14 = 7;
num13 %= num14;
function myResult38(){
	document.getElementById('demo38').innerHTML = num13;
}
// ex39
let num15, num16;
num15 = 2;
num16 = 7;
num15 **= num16;
function myResult39(){
	document.getElementById('demo39').innerHTML = num15;
}
// ex40
let text1 = "what a very ";
text1 += "nice day";
function myResult40(){
	document.getElementById('demo40').innerHTML =text1;
}
// ex41
let x41 = 5 + 5;
let y41 = "5" + 5;
let z41 = "Hello" + 5;
function myResult41(){
	document.getElementById('demo41').innerHTML = x41 +  "<br>" + y41 + "<br>" + z41;
}
// ex42
let numb1, numb2, result42;
numb1 = 9;
numb2 = 4;
result42 = numb1 > numb2;
function myResult42(){
	document.getElementById('demo42').innerHTML = result42;
}
// ex43
let numb3, numb4, result43;
numb1 = 10;
numb2 = "10";
result43 = numb1 === numb2;
function myResult43(){
	document.getElementById('demo43').innerHTML = result43;
}
// ex44
let y44 = 123e5;
let z44 = 123e-5;
function myResult44(){
	document.getElementById('demo44').innerHTML = y44 + "<br>" + z44;
}
// ex45
let x45 = 5;
let y45 = 5;
let z45 = 6;
function myResult45(){
  document.getElementById("demo45").innerHTML = (x45 == y45) + "<br>" + (x45 == z45);
}
// ex46
function myResult46(){
  document.getElementById("demo46").innerHTML = typeof 10 + "<br>" +
  typeof "John" + "<br>" + typeof true;
}
// ex47
const car47 = ["Saab", "Volvo", "BMW"];
function myResult47(){
	document.getElementById('demo47').innerHTML = car47 [2];
}
// ex48
const car48 = ["Saab", "Volvo", "BMW", 10, true];
function myResult48(){
	document.getElementById('demo48').innerHTML = car48 [0] + "<br>" + car48[3] + "<br>" + car48[4];
}
// ex49
function myResult49(){
	document.getElementsByClassName('demo49')[2].innerHTML= "<h2>He is the 1st Mughal emperor</h2>";
}
// ex50
function myResult50(){
	var info = document.getElementsByTagName('h2');
	alert(info.length);
}
