import "./clima.css"

function clima(data){

    const contenedorAnterior = document.querySelector(".container");

    if(contenedorAnterior){
        contenedorAnterior.remove();
    }

    const contenedor = document.createElement("div");
    const ciudad = document.createElement("div");
    const temperatura = document.createElement("div");

    contenedor.classList.add("container");
    ciudad.classList.add("ciudad");
    temperatura.classList.add("temperatura");

    ciudad.textContent = data.name;
    temperatura.textContent = data.main.temp;

    contenedor.appendChild(ciudad);
    contenedor.appendChild(temperatura);

    return contenedor;

}

export { clima };