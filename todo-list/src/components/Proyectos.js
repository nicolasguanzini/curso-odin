import "./Proyectos.css";
import React from "react";

function Proyectos(props) {
    const [indiceProy, setIndiceProy] = React.useState(0);

    return (
      <div className="proyectos">
        <h3>Proyectos</h3>
        <button id="agregarproyecto" onClick={()=> props.setVisibilidadAddProyecto("cont-add-project")}>Agregar Proyecto</button>
        {(props.proyectos[0] === undefined)? 
        <h4>Aún no hay proyectos</h4>:
        props.proyectos.map((proy, index)=>{
                  return (
                    <div className="contProy" key={index}>
                       <div onClick={()=> props.setProyectoActual(proy)} className="proyectoInd">{proy.nombre}</div>
                       <button onClick={()=> props.eliminarProyecto(proy)}className="botoneliminar">eliminar</button>
                    </div>
                  );
        })}
      </div>
    );
  }
  
  export default Proyectos;