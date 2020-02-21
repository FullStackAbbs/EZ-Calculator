


document.getElementById("sum").onclick= addUp
document.getElementById("difference").onclick= subbDown
document.getElementById("product").onclick= prodUp
document.getElementById("division").onclick= divUp



function addUp(){
  var a =parseFloat(document.querySelector("#num1").value);
  var b =parseFloat(document.querySelector("#num2").value);
  var solution= a+b
  document.getElementById("answer").innerHTML=solution;
}

function subbDown(){
  var a =parseFloat(document.querySelector("#num1").value);
  var b =parseFloat(document.querySelector("#num2").value);
  var solution= a-b
  document.getElementById("answer").innerHTML=solution;
}
function prodUp(){
  var a =parseFloat(document.querySelector("#num1").value);
  var b =parseFloat(document.querySelector("#num2").value);
  var solution= a*b
  document.getElementById("answer").innerHTML=solution;
}

function divUp(){
  var a =parseFloat(document.querySelector("#num1").value);
  var b =parseFloat(document.querySelector("#num2").value);
  var solution= a/b
  document.getElementById("answer").innerHTML=solution;
}
