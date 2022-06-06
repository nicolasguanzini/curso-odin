const contenedor = document.querySelector("#contenedorCuadraditos");
const reset = document.querySelector(".reset");
const coloreador = document.querySelector("#colorPicker");
let ancho = 30;
let color = "#000";

coloreador.oninput = (e) => {
  color = e.target.value;
}

window.onload = cargarGrid(ancho);

function cargarGrid(cantidadAncho){
  
  contenedor.style.gridTemplateColumns = `repeat(${cantidadAncho}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${cantidadAncho}, 1fr)`;
  

  for(let i=0; i<cantidadAncho*cantidadAncho; i++){
    const cuadradito = document.createElement("div");
    cuadradito.classList.add('cuadradito');
    contenedor.appendChild(cuadradito);
}
const cuadrado = document.querySelectorAll(".cuadradito");

for(let i=0; i<cuadrado.length; i++){
  cuadrado[i].addEventListener('mousedown', mouseSobre);
}

contenedor.addEventListener('mousedown', () => {
  for(let i=0; i<cuadrado.length; i++){
      cuadrado[i].addEventListener('mouseover', mouseSobre);
  }
});

contenedor.addEventListener('mouseup', () => {
  for(let i=0; i<cuadrado.length; i++){
      cuadrado[i].removeEventListener('mouseover', mouseSobre);
  }
});

reset.addEventListener('click', () => {
  for(let i=0; i<cuadrado.length; i++){
  cuadrado[i].removeEventListener('mouseover', mouseSobre);
  cuadrado[i].style.background = "white";
}
});

for(let i=0; i<cuadrado.length; i++){
  cuadrado[i].removeEventListener('mouseover', mouseSobre);
  cuadrado[i].style.background = "white";
}

}


function mouseSobre(e){
    e.preventDefault();
    e.target.style.background = color;
} 

function cambiarColor(colorElegido){
  color = colorElegido;
}

function nuevoTamano(){
  let tamanoNuevo = prompt("Ingrese un nuevo ancho");
  if(tamanoNuevo <= 100){
    cargarGrid(tamanoNuevo);
  }else{
    alert("El tamaño no puede ser mayor a 100");
  }
  
}



