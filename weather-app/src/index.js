import { pantalla } from "./components/pantalla.js";
import { clima } from "./components/clima.js";

async function getData(ciudad){
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
try {
    const response = await fetch(endpoint, { mode: "cors" });
    if (!response.ok) throw new Error(`City not found`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

document.body.appendChild(pantalla());

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get("ciudad"));

  getData(formData.get("ciudad"))
  .then((data) => {
    console.log(data);
    document.body.appendChild(clima(data));
  })
  .catch((error)=> console.error(error));

});


