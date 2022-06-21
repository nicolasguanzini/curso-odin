import "./AddTodo.css";
import React from "react";

function AddTodo(props) {

    const [nombreTODO, setNombreTODO] = React.useState("");

    function submitTODO(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let TODONew = formData.get("todoNuevo");
        props.agregarTodo(TODONew, props.proyectoActual.nombre);
        setNombreTODO("");
        props.setVisibilidadAddTodo("cont-add-todo visibility");

    }


    return (
      <div className={props.visibilidadAddTodo}>
        <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <form  onSubmit={submitTODO} className="formulario" >  
                <input onChange={event => setNombreTODO(event.target.value)} value={nombreTODO} name="todoNuevo" id="todoNuevo" type="text" placeholder="Nombre de la Tarea" className="input-nombre" required />
                <div className="botones">
                <button className="botonSubmit" type="submit">Agregar</button>
                <button type="button" onClick={()=> props.setVisibilidadAddTodo("cont-add-todo visibility")}>Cancelar</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default AddTodo;