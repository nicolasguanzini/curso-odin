const seleccion = document.querySelectorAll('button');
const textofinal = document.querySelector("#textofinal");
const puntajeMaquina = document.querySelector("#puntosPC");
const puntajeHumano = document.querySelector("#puntosHumano");
const ResultadoTotal = document.querySelector("#resultadoTotal");

let puntajeUsuario = 0;
let puntajePC = 0;


for(let i=0; i<3; i++){
    seleccion[i].addEventListener('click', (e) => {
        let PC = computerPlay();
        let resultado = "";
        switch(e.target.id){
            case "piedraSeleccion":
                resultado = singleSession("rock", PC);
            break;
            case "papelSeleccion":
                resultado = singleSession("paper", PC);
            break;
            case "TijeraSeleccion":
                resultado = singleSession("sissors", PC);
            break;
            default:
            break;
        }
        textofinal.textContent = resultado;
         puntaje(resultado);
         puntajeMaquina.textContent = "El puntaje de la PC es: " + puntajePC;
         puntajeHumano.textContent = "El puntaje del Humano es: " + puntajeUsuario;

         if(puntajePC === 5 && puntajeUsuario < 5){
            ResultadoTotal.textContent = "El ganador del partido es la PC";
         }else if(puntajePC < 5 && puntajeUsuario === 5){
            ResultadoTotal.textContent = "El ganador del partido es el Humano";
         }

      });
}



function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function computerPlay(){
    const opciones = ["Rock", "Paper", "Sissors"];
    const randomNumber = getRandomNumberBetween(0,2);
    return opciones[randomNumber];
}

function singleSession(playerSelection, computerSelection){
    const playerInsensitive = playerSelection.toLowerCase();
    const computerInsensitive = computerSelection.toLowerCase();

    switch(playerInsensitive){
        case "rock":
            switch(computerInsensitive){
                case "rock":
                    return "Its a tie!";
                break;   
                case "paper":
                    return "You Lose! Paper beats Rock";
                break;
                case "sissors":
                    return "You Win! Rock beats Sissors";
                break;
                default:
                break;
            }
        break;
        case "paper":
            switch(computerInsensitive){
                case "rock":
                    return "You Win! Paper beats Rock";
                break;
                case "paper":
                    return "Its a tie!";
                break;
                case "sissors":
                    return "You Lose! Sissors beats Paper";
                break;
                default:
                break;
            }
        break;
        case "sissors":
            switch(computerInsensitive){
                case "rock":
                    return "You Lose! Rock beats Sissors";
                break;
                case "paper":
                    return "You Win! Sissors beats Paper";
                break;
                case "sissors":
                    return "Its a tie!";
                break;
                default:
                break;
            }
        break;
        default:
        break;
    }

    return "Debes ingresar Rock, Paper o Sissors. Chequea que hayas escrito bien la entrada";
}


function puntaje(resultado){
    if(resultado[4] == "L"){
        puntajePC++;
    }else if(resultado[4] == "W"){
        puntajeUsuario++;
    }
}




