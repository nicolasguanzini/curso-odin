import React from "react";
import './App.css';
import Header from "./components/header.js";
import Proyectos from "./components/Proyectos";
import ContPrincipal from "./components/ContPrincipal";
import Addproject from "./components/Addproject";


function ProyectoFactory(nombre, todos) {
  return {nombre, todos};
}

function TodoFactory(descripcion, proyecto, completado) {
  return {descripcion, proyecto, completado}
}

function App() {
  const [proyectos, setProyectos] = React.useState([]);
  const [proyectoActual, setProyectoActual] = React.useState(null);
  const [todoActual, setTodoActual] = React.useState(null);
  const [visibilidadAddProyecto, setVisibilidadAddProyecto] = React.useState("cont-add-project visibility");

  const agregarProyecto = (nombre) => {
    const nuevoProyecto = ProyectoFactory(nombre, []);
    
    for(let i=0; i<proyectos.length; i++){
      if(proyectos[i].nombre === nombre){
        alert("Ya existe un proyecto con ese nombre");
        return;
      }
    }

    setProyectos([...proyectos, nuevoProyecto]);
    setProyectoActual(nuevoProyecto);
  }

  const agregarTodo = (descripcion, proyecto) => {
    const nuevoTodo = TodoFactory(descripcion, proyecto, false);
    const indiceProyecto = proyectos.findIndex(proy => proy.nombre === proyecto);

    if(indiceProyecto === -1){
      alert("El proyecto no existe");
      return;
    }else{
      for(let i=0; i<proyectos[indiceProyecto].todos.length; i++){
        if(proyectos[indiceProyecto].todos[i] === descripcion){
          alert("Ya existe un Todo con ese nombre");
          return;
        }
        
        let clonProyectos = [...proyectos];
        clonProyectos[indiceProyecto].todo.push(nuevoTodo);
        setProyectos(clonProyectos);
    }
  }

  const eliminarProyecto = (proyecto) => {
    const indiceProyecto = proyectos.findIndex(proy => proy.nombre === proyecto);
    if(indiceProyecto === -1){
      alert("El proyecto no existe");
      return;
    }
    const clonProyectos = [...proyectos];
    clonProyectos.splice(indiceProyecto, 1);
    setProyectos(clonProyectos);
  }

  const eliminarTodo = (todo, proyecto) => {
    const indiceProyecto = proyectos.findIndex(proy => proy.nombre === proyecto.nombre);
    const indiceTodo = proyectos[indiceProyecto].todos.findIndex(t => t.descripcion === todo.descripcion);
    let clonProyectos = [...proyectos];
    clonProyectos[indiceProyecto].todos.splice(indiceTodo, 1);
    setProyectos(clonProyectos);
  }

  return (
    <div className="App">
      <Addproject agregarProyecto={agregarProyecto} visibilidadAddProyecto={visibilidadAddProyecto} setVisibilidadAddProyecto={setVisibilidadAddProyecto}/>

      <Header />
      
      <Proyectos proyectos={proyectos} agregarProyecto={agregarProyecto} proyectoActual={proyectoActual} setProyectoActual={setProyectoActual} setVisibilidadAddProyecto={setVisibilidadAddProyecto} eliminarProyecto={eliminarProyecto} />

      <ContPrincipal proyectos={proyectos} proyectoActual={proyectoActual} todoActual={setTodoActual}/>

    </div>
  );
}
}

export default App;