let display_text = document.getElementById("Input");
let checknum1 = false;
let operator = null;
let num1 = [];
let num2 = [];
let checkop = false;

//Number functions
document.getElementById("0").onclick = function(){
    multiple_nums(0)
    checknum1 = true;
    switch_nums(0)
    console.log(parseInt(num1.join("")));
}
document.getElementById("1").onclick = function(){
    multiple_nums(1)
    checknum1 = true;
    switch_nums(1)
}
document.getElementById("2").onclick = function(){
    multiple_nums(2)
    checknum1 = true;
    switch_nums(2)
}
document.getElementById("3").onclick = function(){
    multiple_nums(3)
    checknum1 = true;
    switch_nums(3)
}
document.getElementById("4").onclick = function(){
    multiple_nums(4)
    checknum1 = true;
    switch_nums(4)
}
document.getElementById("5").onclick = function(){
    multiple_nums(5)
    checknum1 = true;
    switch_nums(5)
}
document.getElementById("6").onclick = function(){
    multiple_nums(6)
    checknum1 = true;
    switch_nums(6)
}
document.getElementById("7").onclick = function(){
    multiple_nums(7)
    checknum1 = true;
    switch_nums(7)
}
document.getElementById("8").onclick = function(){
    multiple_nums(8)
    checknum1 = true;
    switch_nums(8)
}
document.getElementById("9").onclick = function(){
    multiple_nums(9)
    checknum1 = true;
    switch_nums(9)
}


//Operators
document.getElementById("plus").onclick = function(){
    display_text.innerHTML = "+";
    operator = "plus";
    checkop = true;
}
document.getElementById("minus").onclick = function(){
    display_text.innerHTML = "-";
    operator = "minus";
    checkop = true;
}
document.getElementById("times").onclick = function(){
    display_text.innerHTML = "*";
    operator = "times";
    checkop = true;
}
document.getElementById("division").onclick = function(){
    display_text.innerHTML = "/";
    operator = "division";
    checkop = true;
}

//CLEAR (CE) function
document.getElementById("CE").onclick = function(){
    display_text.innerHTML = 0
    checknum1 = false;
    num1.length = 0;
    num2.length = 0;
    checkop = false;
}

//EQUALS (=) function
document.getElementById("equals").onclick = function(){
    equals()
    console.log(num1);
    console.log(num2);
}


//Functions for equals button
function equals(){
    if (operator == "plus"){     //turns the num1 nad num2 array into a string then to an int 
        display_text.innerHTML = parseInt(num1.join(""))+parseInt(num2.join(""))
    } 
    else if (operator == "minus"){
        display_text.innerHTML = parseInt(num1.join(""))-parseInt(num2.join(""))
    }
    else if (operator == "times"){
        display_text.innerHTML = parseInt(num1.join(""))*parseInt(num2.join(""))
    } else{
        display_text.innerHTML = parseInt(num1.join(""))/parseInt(num2.join(""))
    }
    
}

function multiple_nums(number){ //changes the number on first click and adds onto it
    if(checknum1 == true){
        display_text.innerHTML += number
    } else{
        display_text.innerHTML = number
    }
}

function switch_nums(number){ //If no operator is chosen then use num1 otherwise use num2
    if(checkop == false){
        num1.push(number);
    } else {
        num2.push(number);
    }
}