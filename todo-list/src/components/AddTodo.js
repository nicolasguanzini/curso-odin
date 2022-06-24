import "../styles/AddTodo.css";
import React from "react";
import {format, addDays} from "date-fns";

function AddTodo(props) {

    const [nombreTODO, setNombreTODO] = React.useState("");
    const [fecha, setFecha] = React.useState(new Date());
    const [fechaMuestra, setFechaMuestra] = React.useState("");

    function submitTODO(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let TODONew = formData.get("todoNuevo");
        props.agregarTodo(TODONew, props.proyectoActual.nombre, fecha);
        setNombreTODO("");
        props.setVisibilidadAddTodo("cont-add-todo visibility");

    }

    function handleFecha(e){
      const date = new Date(e.target.value);
      const sumado = addDays(date, 1);
      const formateado = format(sumado, "yyyy-MM-dd");
      setFechaMuestra(e.target.value);
      setFecha(formateado);
    }


    return (
      <div className={props.visibilidadAddTodo}>
        <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <form  onSubmit={submitTODO} className="formulario" >  

                <label>Descripción:</label>
                <input onChange={event => setNombreTODO(event.target.value)} value={nombreTODO} name="todoNuevo" id="todoNuevo" type="text" placeholder="Nombre de la Tarea" className="input-nombre" required />

                <label>Fecha:</label>
                <input onChange={handleFecha} value={fechaMuestra} name="fechaNueva" id="fechaNueva" type="date"  className="input-fecha" required />
                
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