const display = document.getElementById("display");

let primerNumero = 0;
let segundoNumero = 0;
let operadoractual = "";
let pasoActual = 1;

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
    if(pasoActual === 2){
        display.textContent === "0";
        actualizarPaso();
    }
    if(display.textContent == "0"){
        display.textContent = numero;
    }else{
        display.textContent = display.textContent + numero;
    }
}

function operadores(operador){
    switch(pasoActual){
        case 1:
            primerNumero = parseInt(display.textContent);
            operadoractual = operador;
            actualizarPaso();
        break;
        case 2:
            
        break;
        case 3:
            segundoNumero = parseInt(display.textContent);
            display.textContent = operate(operador, primerNumero, segundoNumero);
            primerNumero = parseInt(display.textContent);
            segundoNumero = 0;
            operadoractual = operador;
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
            if(primerNumero !== 0 && segundoNumero === 0 && operadoractual !== ""){
                pasoActual = 2;
            }
        break;
        case 2: 
                pasoActual = 3;
        break;
        case 3: //Escribo un segundo numero y apreto el operador de nuevo
            if(primerNumero !== 0 && segundoNumero !== 0 && operadoractual !== ""){
                pasoActual = 1;
            }
        break;
        default:
        break;
    }
}