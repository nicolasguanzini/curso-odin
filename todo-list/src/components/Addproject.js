import "./Addproject.css";
import React from "react";

function Addproject(props) {

    const [nombreProyecto, setNombreProyecto] = React.useState("");

    function submitProyecto(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let proyectoNew = formData.get("proyectoNuevo");
        setNombreProyecto("");
        props.agregarProyecto(proyectoNew);
        props.setVisibilidadAddProyecto("cont-add-project visibility");
    }


    return (
      <div className={props.visibilidadAddProyecto}>
        <div className="add-project">
            <form  onSubmit={submitProyecto} className="formulario" >  
                <input onChange={event => setNombreProyecto(event.target.value)} value={nombreProyecto} name="proyectoNuevo" id="proyectoNuevo" type="text" placeholder="Nombre del proyecto" className="input-nombre" required />
                <div className="botones">
                <button className="botonSubmit" type="submit">Agregar</button>
                <button type="button" onClick={()=> props.setVisibilidadAddProyecto("cont-add-project visibility")}>Cancelar</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default Addproject;