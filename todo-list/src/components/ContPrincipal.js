import "./ContPrincipal.css";
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
              let clase = "cont-todo";

              if(index === indiceTodo){
                clase = "cont-todo selection"
              }

              return(
                <div className={clase} key={index}>
                       <div onClick={()=> props.setTodoActual(todo)} className="todoInd">{todo.descripcion}</div>
                       <button onClick={()=> props.eliminarTodo(todo)}className="btnEliminarTodo">eliminar</button>
                    </div>

              );
            }

         )}

      </div>
    );
  }
  
  export default ContPrincipal;