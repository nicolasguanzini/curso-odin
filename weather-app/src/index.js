import { pantalla } from "./components/pantalla.js";
import { clima } from "./components/clima.js";

async function getData(ciudad){
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=70e896396874524da7286624eac2e8e1`;
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

  getData(formData.get("ciudad"))
  .then((data) => {
    document.body.appendChild(clima(data));
  })
  .catch((error)=> console.error(error));

});


