import "../styles/ContPrincipal.css";
import React, { useEffect } from "react";

function ContPrincipal(props) {

  const [indiceActual, setIndiceActual] = React.useState(null);
  const [indiceTodo, setIndiceTodo] = React.useState(null);

  useEffect(
    ()=>{    
      if(props.proyectoActual === null){

      }else{
        const indiceProyecto = props.proyectos.findIndex(proy => proy.nombre === props.proyectoActual.nombre);
        setIndiceActual(indiceProyecto);

      }
    }
  ,[props.proyectos, props.proyectoActual]);

  useEffect(
    ()=>{  
      if(props.todoActual === null){

      }else{
        const indice = props.proyectos[indiceActual].todos.findIndex(todo => todo.descripcion === props.todoActual.descripcion);
        setIndiceTodo(indice);

      }
    }
  ,[props.todoActual]);

  function confirmacion(tarea){
    let conf = window.confirm("Realmente desea eliminar la tarea?");
    if(conf){
      props.eliminarTodo(tarea);
    }
  }

    return (
      <div className="contPrincipal">
        <h3>Tareas</h3>
        {!(props.proyectos[0] === undefined) && <button onClick={()=> props.setVisibilidadAddTodo("cont-add-todo")} id="agregarTodo">Agregar Tarea</button>}
        
        {(props.proyectos[0] === undefined)?
          <h4>Aún no ha seleccionado un proyecto</h4>:
          <h4><u>Proyecto:</u> {!(props.proyectoActual == null) && props.proyectoActual.nombre}</h4>}

          {(props.proyectos[indiceActual] === undefined)?
         <div></div> : (props.proyectos[indiceActual].todos[0] == undefined)?
         <div></div>:  props.proyectos[indiceActual].todos.map(
            (todo, index)=>{
              let clase = "cont-todo";

              if(index === indiceTodo){
                clase = "cont-todo selection"
              }

              return(
                <div onClick={()=> props.setTodoActual(todo)} className={clase} key={index}>
                       <div  className="todoInd">{todo.descripcion}</div>
                      <div>{todo.fecha}</div>
                       <button onClick={()=> confirmacion(todo)}className="btnEliminarTodo">eliminar</button>
                    </div>

              );
            }

         )}

      </div>
    );
  }
  
  export default ContPrincipal;