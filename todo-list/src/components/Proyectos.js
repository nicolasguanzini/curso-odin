import "../styles/Proyectos.css";
import React, { useEffect } from "react";

function Proyectos(props) {

  const [indiceActual, setIndiceActual] = React.useState(null);

  useEffect(
    ()=>{    
      if(props.proyectoActual === null){

      }else{
        const indiceProyecto = props.proyectos.findIndex(proy => proy.nombre === props.proyectoActual.nombre);
        setIndiceActual(indiceProyecto);
      }
    }
  ,[props.proyectoActual]);


    function confirmacion(proyecto){
      let conf = window.confirm("Realmente desea eliminar el proyecto?");
      if(conf){
        props.eliminarProyecto(proyecto);
      }
    }


    return (
      <div className="proyectos">
        <h3>Proyectos</h3>
        <button id="agregarproyecto" onClick={()=> props.setVisibilidadAddProyecto("cont-add-project")}>Agregar Proyecto</button>

        {(props.proyectos[0] === undefined)? 
        <h4>Aún no hay proyectos</h4>:

        props.proyectos.map((proy, index)=>{
          let clase = "contProy";

          if(indiceActual === index){
            clase = "contProy seleccionado";
          }
                  return (
                    <div className={clase} key={index}>
                       <div onClick={()=> props.setProyectoActual(proy)} className="proyectoInd">{proy.nombre}</div>
                       <button onClick={()=> confirmacion(proy)}className="botoneliminar">eliminar</button>
                    </div>
                  );
        })}
        
      </div>
    );
  }
  
  export default Proyectos;