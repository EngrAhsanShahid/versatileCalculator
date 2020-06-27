function getValue(value){
    var value = document.getElementById("initial_text").innerHTML += value;
}
function clearAll(){    
    document.getElementById("initial_text").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
function getResult(){
    var num = document.getElementById("initial_text").innerHTML;
    var result = eval(num);
    console.log(result)
    document.getElementById("result").innerHTML = result;
}