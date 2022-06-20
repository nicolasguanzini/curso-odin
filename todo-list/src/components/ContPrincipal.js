import "./ContPrincipal.css";

function ContPrincipal(props) {

  function indiceProyecto(proyectoActual){
    const indiceProyecto = props.proyectos.findIndex(proy => proy.nombre === proyectoActual.nombre);
  }

    return (
      <div className="contPrincipal">
        <h3>Tareas</h3>
        {!(props.proyectos[0] === undefined) && <button onClick={()=> props.setVisibilidadAddTodo("cont-add-todo")} id="agregarTodo">Agregar TODO</button>}
        
        {(props.proyectos[0] === undefined)?
          <h4>Aún no ha seleccionado un proyecto</h4>:
          <h4><u>Proyecto:</u> {props.proyectoActual.nombre}</h4>}

      </div>
    );
  }
  
  export default ContPrincipal;