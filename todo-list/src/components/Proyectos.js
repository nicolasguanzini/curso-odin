import "./Proyectos.css";
import React from "react";

function Proyectos(props) {
    const [indiceProy, setIndiceProy] = React.useState(0);
    
    function agregarProyectoSumando(nombre){
          props.agregarProyecto("Nicolas" + indiceProy);
          setIndiceProy(indiceProy + 1);
    }

    return (
      <div className="proyectos">
        <h3>Proyectos</h3>
        <button onClick={()=> agregarProyectoSumando("Nicolas")}>Agregar Proyecto</button>
        {(props.proyectos[0] === undefined)? 
        <h4>Aún no hay proyectos</h4>:
        props.proyectos.map((proy, index)=>{
                  return (
                    <h4 onClick={()=> props.setProyectoActual(proy)} key={index} className="proyectoInd">{proy.nombre}</h4>
                  );
        })}
      </div>
    );
  }
  
  export default Proyectos;