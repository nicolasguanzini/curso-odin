const display = document.getElementById("display");
display.textContent = "0";

let primerNumero = 0;
let segundoNumero = 0;
let operadoractual = "";
let pasoActual = 1;

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    if (e.keyCode === 97) {
        handleClick(1);
    }else if (e.keyCode === 98) {
        handleClick(2);
    }else if (e.keyCode === 99) {
        handleClick(3);
    }else if (e.keyCode === 100) {
        handleClick(4);
    }else if (e.keyCode === 101) {
        handleClick(5);
    }else if (e.keyCode === 102) {
        handleClick(6);
    }else if (e.keyCode === 103) {
        handleClick(7);
    }else if (e.keyCode === 104) {
        handleClick(8);
    }else if (e.keyCode === 105) {
        handleClick(9);
    }else if (e.keyCode === 96) {
        handleClick(0);
    }else if (e.keyCode === 27) {
        handleClick("AC");
    }else if (e.keyCode === 109) {
        handleClick("-");
    }else if (e.keyCode === 107) {
        handleClick("+");
    }else if (e.keyCode === 106) {
        handleClick("x");
    }else if (e.keyCode === 111) {
        handleClick("/");
    }else if (e.keyCode === 13) {
        handleClick("=");
    }else if (e.keyCode === 110) {
        handleClick(".");
    }
  }

function handleClick(boton){
  if(isanumber(boton)){
        numeros(boton);
  }else{
      operadores(boton);
  }
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return sumar(num1, num2);
        break;
        case "-":
            return restar(num1, num2);
        break;
        case "x":
            return multiplicar(num1, num2);
        break;
        case "/":
            return dividir(num1, num2);
        break;
        default:
            return null;
        break;
    }
}

function sumar(numero1, numero2){
    return numero1 + numero2;
}
function restar(numero1, numero2){
    return numero1 - numero2;
}
function multiplicar(numero1, numero2){
    return numero1 * numero2;
}
function dividir(numero1, numero2){
    return numero1 / numero2;
}

function isanumber(boton){
    if(isNaN(boton)){
        return false;
    }
    return true;
}

function numeros(numero){
    switch(pasoActual){
        case 1: // Paso inicial - todo en cero y operador en nada
            display.textContent = numero;
            primerNumero = parseFloat(display.textContent);
            actualizarPaso();
        break;
        case 2: //Ingresando el primer numero pero todavia no aprieto operador
            display.textContent = display.textContent + numero;
            primerNumero = parseFloat(display.textContent);
            actualizarPaso();
        break;
        case 3: //Oprimo operador pero todavia no elijo el segundo numero
            if(operadoractual === "igual"){
                return;
            }
            display.textContent = numero;
            segundoNumero = parseFloat(display.textContent);
            actualizarPaso();
        break;
        case 4: //Elijo segundo numero pero todavia no aprete operador
            display.textContent = display.textContent + numero;
            segundoNumero = parseFloat(display.textContent);
            actualizarPaso();
        break;
        default:
        break;
    }
}

function operadores(operador){
    switch(operador){
        case "AC":
            primerNumero = 0;
            segundoNumero = 0;
            operadoractual = "";
            display.textContent = "0";
            pasoActual = 1;
            return;
        break;
        case "igual":
            if(pasoActual === 4){
                display.textContent = redondear(operate(operadoractual, primerNumero, segundoNumero));
                primerNumero = parseFloat(display.textContent);
                segundoNumero = 0;
                operadoractual = operador;
                actualizarPaso();
            }
            return;
        break;
        case ".":
           let regex = /\./ig;
           if(regex.test(display.textContent) == false){

                switch(pasoActual){
                    case 1:
                        display.textContent = "0.";
                        primerNumero = 0;
                        pasoActual = 2;
                    break;
                    case 2:
                        primerNumero = display.textContent;
                        display.textContent = display.textContent + ".";
                    break;
                    case 3:
                        display.textContent = "0.";
                        segundoNumero = 0;
                        pasoActual = 4;
                    break;
                    case 4:
                        segundoNumero = display.textContent;
                        display.textContent = display.textContent + ".";
                    break;
                    default:
                    break;
                } 
           }
           return;  
        
        break;
        default:
        break;
    }
    switch(pasoActual){
        case 1: // Paso inicial - todo en cero y operador en nada
            return;
        break;
        case 2: //Ingresando el primer numero pero todavia no aprieto operador
            operadoractual = operador;
            actualizarPaso();
        break;
        case 3: //Oprimo operador pero todavia no elijo el segundo numero
            if(operadoractual === "igual"){
                operadoractual = operador;
                actualizarPaso();
            }
        break;
        case 4: //Elijo segundo numero pero todavia no aprete operador
            display.textContent = redondear(operate(operadoractual, primerNumero, segundoNumero));
            primerNumero = parseFloat(display.textContent);
            segundoNumero = 0;
            operadoractual = operador;
            actualizarPaso();
        break;
        default:
        break;
    }
}

function redondear(number) {
    return Math.round(number * 1000) / 1000
  }

//Maquina de estados
function actualizarPaso(){
    switch(pasoActual){
        case 1: // Paso inicial - todo en cero y operador en nada
            if(primerNumero !== 0 && segundoNumero === 0 && operadoractual === ""){
                pasoActual = 2;
            }
        break;
        case 2: //Ingresando el primer numero pero todavia no aprieto operador
            if(primerNumero !== 0 && segundoNumero === 0 && operadoractual !== ""){
                pasoActual = 3;
            }
        break;
        case 3: //Oprimo operador pero todavia no elijo el segundo numero
            if(primerNumero !== 0 && segundoNumero !== 0 && operadoractual !== ""){
                pasoActual = 4;
            }
        break;
        case 4: //Elijo segundo numero pero todavia no aprete operador
            if(primerNumero !== 0 && segundoNumero === 0 && operadoractual !== ""){
                pasoActual = 3;
            }
        break;
        default:
        break;
    }
}