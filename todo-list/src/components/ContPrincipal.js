import "./ContPrincipal.css";
import React, { useEffect } from "react";

function ContPrincipal(props) {

  const [indiceActual, setIndiceActual] = React.useState(null);

  useEffect(

    ()=>{
      
      if(props.proyectoActual === null){

      }else{
        const indiceProyecto = props.proyectos.findIndex(proy => proy.nombre === props.proyectoActual.nombre);
        setIndiceActual(indiceProyecto);

      }

    }

  ,[props.proyectos, props.proyectoActual]);

    return (
      <div className="contPrincipal">
        <h3>Tareas</h3>
        {!(props.proyectos[0] === undefined) && <button onClick={()=> props.setVisibilidadAddTodo("cont-add-todo")} id="agregarTodo">Agregar Tarea</button>}
        
        {(props.proyectos[0] === undefined)?
          <h4>Aún no ha seleccionado un proyecto</h4>:
          <h4><u>Proyecto:</u> {props.proyectoActual.nombre}</h4>}

          {(props.proyectos[indiceActual] === undefined)?
         <div></div> : (props.proyectos[indiceActual].todos[0] == undefined)?
         <div></div>:  props.proyectos[indiceActual].todos.map(
            (todo, index)=>{
              return(
                <h3 key={index}>{todo.descripcion}</h3>
              );
            }

         )}

      </div>
    );
  }
  
  export default ContPrincipal;