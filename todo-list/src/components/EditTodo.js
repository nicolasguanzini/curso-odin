import "../styles/EditTodo.css";
import React, { useEffect } from "react";
import {format, addDays} from "date-fns";

function EditTodo(props){

    const [nombreTODO, setNombreTODO] = React.useState("");
    const [fechaMuestra, setFechaMuestra] = React.useState("");

    function handleFecha(e){
        setFechaMuestra(e.target.value);
    }

    function submitTODO(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let TODONew = formData.get("descTodo");

        props.editarTodo(props.todoActual, TODONew, fechaMuestra, props.todoActual.completado);

        setNombreTODO("");
        props.setVisibilidadEditTodo("cont-edit-todo visibility");
    }

    useEffect(
        ()=>{

            if(props.todoActual){
                setNombreTODO(props.todoActual.descripcion);
            setFechaMuestra(props.todoActual.fecha);
            }
            
        }
        ,[props.todoActual]);

    return(
        <div className={props.visibilidadEditTodo}>
            <div className="edit-todo">
            <h3>Editar Tarea</h3>

            <form  onSubmit={submitTODO} className="formulario" >  

                <label>Descripción:</label>
                <input onChange={event => setNombreTODO(event.target.value)} value={nombreTODO} name="descTodo" id="descTodo" type="text" placeholder="Nombre de la Tarea" className="input-nombre" required />

                <label>Fecha:</label>
                <input onChange={handleFecha} value={fechaMuestra} name="fechaNueva" id="fechaNueva" type="date"  className="input-fecha" required />

                <div className="botones">
                <button className="botonSubmit" type="submit">Editar</button>
                <button type="button" onClick={()=> props.setVisibilidadEditTodo("cont-edit-todo visibility")}>Cancelar</button>
                </div>
                </form>

            </div>
        </div>
    );
}

export default EditTodo;