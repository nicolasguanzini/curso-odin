import "../styles/ContPrincipal.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

function ContPrincipal(props) {

  const [indiceActual, setIndiceActual] = React.useState(null);
  const [indiceTodo, setIndiceTodo] = React.useState(null);

  const handleCkeck = tarea => (e) => {
    props.setTodoActual(tarea);
    
    if(tarea !== {}){
      
      if(tarea.completado && !e.target.checked){
        props.editarTodo(tarea, tarea.descripcion, tarea.fecha, false);
      }else if(!tarea.completado && e.target.checked){
        props.editarTodo(tarea, tarea.descripcion, tarea.fecha, true);
      }
    }

  }

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
              let tachado = "todoInd";

              if(index === indiceTodo){
                clase = "cont-todo selection"
              }

              if(todo.completado){
                tachado = "todoInd tachado";
              }

              return(
                <div onClick={()=> props.setTodoActual(todo)} className={clase} key={index}>
                     <input  onChange={handleCkeck(todo)} className="checkbox" type="checkbox"></input>
                       <div  className={tachado} >{todo.descripcion}</div>
                       
                       <FontAwesomeIcon onClick={()=> props.setVisibilidadEditTodo("cont-edit-todo")} className="editIcon" icon={faPenToSquare} />
                       
                       <button onClick={()=> confirmacion(todo)}className="btnEliminarTodo">eliminar</button>
                    </div>

              );
            }

         )}

      </div>
    );
  }
  
  export default ContPrincipal;