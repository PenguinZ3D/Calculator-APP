//DEFAULT Answer text 
let display_text = document.getElementById("Input").innerHTML

let num1 = [];
let num2 = [];
let operator = null;
let checkop = false;
let checknum1 = false;
let final = 0;



//Functions for nums and operators
document.getElementById("0").onclick = function(){
    if (display_text == "0") {
        document.getElementById("Input").innerHTML = display_text
    } else {
        document.getElementById("Input").innerHTML = "0"
    }
    checknum(0)
}
document.getElementById("1").onclick = function(){
    checknum(1)
    document.getElementById("Input").innerHTML = "1"
    number = 1;
    
}
document.getElementById("2").onclick = function(){
    checknum(2)
    document.getElementById("Input").innerHTML = "2"
    number = 2;
    
}
document.getElementById("3").onclick = function(){
    checknum(3)
    document.getElementById("Input").innerHTML = "3"
    number = 3;
    
}
document.getElementById("4").onclick = function(){
    checknum(4)
    document.getElementById("Input").innerHTML = "4"
    number = 4;
    
}
document.getElementById("5").onclick = function(){
    checknum(5)
    document.getElementById("Input").innerHTML = "5"
    number = 5;
    
}
document.getElementById("6").onclick = function(){
    checknum(6)
    document.getElementById("Input").innerHTML = "6"
    number = 6;
    
}
document.getElementById("7").onclick = function(){
    checknum(7)
    document.getElementById("Input").innerHTML = "7"
    number = 7;

}
document.getElementById("8").onclick = function(){
    checknum(8)
    document.getElementById("Input").innerHTML = "8"
    number = 8;
    
}
document.getElementById("9").onclick = function(){
    checknum(9)
    document.getElementById("Input").innerHTML = "9"
    number = 9;
    
}

//Operations
document.getElementById("plus").onclick = function(){
    checkop = true;
    operator = "plus";
    document.getElementById("Input").innerHTML = "+"
}
document.getElementById("minus").onclick = function(){
    checkop = true;
    operator = "minus";
    document.getElementById("Input").innerHTML = "-"
}
document.getElementById("times").onclick = function(){
    checkop = true;
    operator = "times";
    document.getElementById("Input").innerHTML = "*"
}
document.getElementById("division").onclick = function(){
    checkop = true;
    operator = "division";
    document.getElementById("Input").innerHTML = "/"
}

//CLEAR (CE) Button Fucntions
document.getElementById("CE").onclick = function(){
    document.getElementById("Input").innerHTML = String(0)
    num1 = 0;
    num2 = 0;
    operator = null;
    checkop = false;
    final = 0;
    checknum1 = false;
}

//EQUALS (=) button Fucntions
document.getElementById("equals").onclick = function(){
    op();
    document.getElementById("Input").innerHTML = final;
    checkop = false;
    checknum1 = false;
    
}

// Checks between the first number and the second number (USED IN EVERY NUMBER BUTTON FUNCTION)
function checknum(number){
    if(checkop == false){
        num1.push(number);
    } else {
        num2.push(number);
    }
}

// Checks the operator being used (USED IN EQUALS BUTTON FUNCTION)
function op(){
    if(operator == "plus"){
        final = num1 + num2;
    }
    if(operator == "minus"){
        final = num1 - num2;
    }
    if(operator == "times"){
        final = num1 * num2;
    }
    if(operator == "division"){
        final = num1 / num2;
    }
}

