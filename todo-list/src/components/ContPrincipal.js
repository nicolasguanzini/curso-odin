import "./ContPrincipal.css";

function ContPrincipal(props) {
    return (
      <div className="contPrincipal">
        <h3>Contenedor Principal</h3>
        {(props.proyectoActual === null)?
          <h4>Aún no ha seleccionado un proyecto</h4>:
          <h4>{props.proyectoActual.nombre}</h4>}
      </div>
    );
  }
  
  export default ContPrincipal;