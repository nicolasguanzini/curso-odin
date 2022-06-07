const display = document.getElementById("display");

let primerNumero = 0;
let segundoNumero = 0;
let operadoractual = "";

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
    if(numero2 == 0){
        return null;
    }
    return numero1 / numero2;
}

function isanumber(boton){
    if(isNaN(boton)){
        return false;
    }
    return true;
}

function numeros(numero){
    if(primerNumero == 0){
        display.textContent = numero;
        primerNumero = parseInt(display.textContent);
    }else if(primerNumero != 0 && segundoNumero == 0){
        display.textContent = display.textContent + numero;
    }
}

function operadores(operador){
    if(operadoractual !== "") evaluar();
    primerNumero = display.textContent;
    operadoractual = operador;
}

function evaluar(){
    if(operadoractual == "/" && display.textContent == "0"){
        alert("No se puede dividir por cero");
        return;
    }
    segundoNumero = display.textContent;
    display.textContent = redondear(
        operate(operadoractual, primerNumero, segundoNumero)
    );
    operadoractual = "";
}

function redondear(number) {
    return Math.round(number * 1000) / 1000
  }