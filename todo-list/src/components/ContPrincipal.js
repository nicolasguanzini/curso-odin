import "../styles/ContPrincipal.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare, faCircleCheck, faCircle, faTrashCan} from "@fortawesome/free-solid-svg-icons";

function ContPrincipal(props) {

  const [indiceActual, setIndiceActual] = React.useState(null);
  const [indiceTodo, setIndiceTodo] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  function handleCheck(todo){
    setChecked(!checked);
    const indiceProyecto = props.proyectos.findIndex(proy => proy.nombre === todo.proyecto);
    const indiceTodo = props.proyectos[indiceProyecto].todos.findIndex(t => t.descripcion === todo.descripcion);
    let completado = props.proyectos[indiceProyecto].todos[indiceTodo].completado;

    props.editarTodo(todo, todo.descripcion, todo.fecha, !completado);
    console.log(props.proyectos);
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
          <h4 className="proyecto-titulo"><u>Proyecto:</u> {!(props.proyectoActual == null) && props.proyectoActual.nombre}</h4>}

          {(props.proyectos[indiceActual] === undefined)?
         <div></div> : (props.proyectos[indiceActual].todos[0] == undefined)?
         <div></div>:  props.proyectos[indiceActual].todos.map(
            (todo, index)=>{
              let clase = "cont-todo";
              let tachado = "todoInd";
              let chequeado = false;

              if(index === indiceTodo){
                clase = "cont-todo selection"
              }

              if(todo.completado){
                tachado = "todoInd tachado";
                chequeado = true;
              }

              return(
                <div onClick={()=> props.setTodoActual(todo)} className={clase} key={index}>

                  {chequeado ?
                    <FontAwesomeIcon onClick={()=> handleCheck(todo)} className="ckecIcon" icon={faCircleCheck} /> :
                    <FontAwesomeIcon onClick={()=> handleCheck(todo)} className="ckecIcon" icon={faCircle} />
                     }
                     
                       <div  className={tachado} >{todo.descripcion}</div>
                       
                       <FontAwesomeIcon onClick={()=> props.setVisibilidadEditTodo("cont-edit-todo")} className="editIcon" icon={faPenToSquare} />
                       
                       <FontAwesomeIcon onClick={()=> confirmacion(todo)} className="deleteIcon" icon={faTrashCan} />

                    </div>

              );
            }

         )}

      </div>
    );
  }
  
  export default ContPrincipal;