import "./pantalla.css"

function pantalla() {
    const div = document.createElement("div");
    const encabezado = document.createElement("header");
    const titulo = document.createElement("h1");
    const main = document.createElement("main");
    const contenido = document.createElement("div");

    const form = document.createElement("form");
    const tituloBusqueda = document.createElement("label");
    const contenedorBusqueda = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    button.textContent = "Buscar";
    tituloBusqueda.textContent = "Buscar ciudad";


    encabezado.classList.add("encabezado");
    titulo.classList.add("titulo");
    titulo.textContent = "Weather App";
    contenido.classList.add("contenido");

    div.appendChild(encabezado);
    encabezado.appendChild(titulo);
    div.appendChild(main);
    main.appendChild(contenido);

    form.appendChild(tituloBusqueda);
    form.appendChild(contenedorBusqueda);
    contenedorBusqueda.appendChild(input);
    contenedorBusqueda.appendChild(button);
    main.appendChild(form);
  
    return div;
  }
  
  export { pantalla };