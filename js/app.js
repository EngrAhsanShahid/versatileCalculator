var value;
function getValue(value){
    value = document.getElementById("initial_text").innerHTML += value;
}
function clearAll(){    
    document.getElementById("initial_text").innerHTML = " ";
    document.getElementById("result").innerHTML = " ";
}
function getResult(){
    var num = document.getElementById("initial_text").innerHTML;
    var result = eval(num);
    document.getElementById("result").innerHTML = result;
}
function sqRoot(value){
    value = document.getElementById("initial_text").innerHTML += value;
    var split = value.split('s');
    var sqroot = Math.sqrt(split[0]);
    document.getElementById("result").innerHTML = sqroot;
}
function callDivide(value){
    value = document.getElementById("initial_text").innerHTML += value;
    var split = value.split('1/x');
    console.log(split)
    var divide = 1/split[0];
    console.log(divide)
    document.getElementById("result").innerHTML = divide;
}