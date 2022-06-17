import "./clima.css"

function clima(data){

    const contenedorAnterior = document.querySelector(".container");

    if(contenedorAnterior){
        contenedorAnterior.remove();
    }

    const contenedor = document.createElement("div");
    const ciudad = document.createElement("div");
    const tituloTemp = document.createElement("div");
    const temperatura = document.createElement("div");
    const sensacion = document.createElement("div");
    const tituloSensacion = document.createElement("div");
    const descripcionClima = document.createElement("div");

    contenedor.classList.add("container");
    ciudad.classList.add("ciudad");
    temperatura.classList.add("temperatura");
    tituloTemp.classList.add("titulo-temp");
    sensacion.classList.add("sensacion");
    tituloSensacion.classList.add("titulo-sensacion");
    descripcionClima.classList.add("descripcion-clima");

    ciudad.textContent = data.name;
    temperatura.textContent = data.main.temp + "°C";
    tituloTemp.textContent = "Temperatura";
    tituloSensacion.textContent = "Sensación térmica";
    sensacion.textContent = data.main.feels_like + "°C";
    descripcionClima.textContent = data.weather[0].description;

    contenedor.appendChild(ciudad);
    contenedor.appendChild(tituloTemp);
    contenedor.appendChild(temperatura);
    contenedor.appendChild(tituloSensacion);
    contenedor.appendChild(sensacion);
    contenedor.appendChild(descripcionClima);

    return contenedor;

}

export { clima };