function press(val){
document.getElementById("display").value += val;
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function calculate(){
let x = document.getElementById("display").value;
document.getElementById("display").value = eval(x);
}