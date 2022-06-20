import React from "react";
import './App.css';
import Header from "./components/header.js";
import Addproject from "./components/Addproject";
import Proyectos from "./components/Proyectos";
import ContPrincipal from "./components/ContPrincipal";
import AddTodo from "./components/AddTodo";


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
  const [visibilidadAddTodo, setVisibilidadAddTodo] = React.useState("cont-add-todo visibility");

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
        }}
        
        let clonProyectos = [...proyectos];
        clonProyectos[indiceProyecto].todos.push(nuevoTodo);
        setProyectos(clonProyectos);
  }
}

  const eliminarProyecto = (proyecto) => {
    const indiceProyecto = proyectos.findIndex(proy => proy.nombre === proyecto.nombre);
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

      <AddTodo visibilidadAddTodo={visibilidadAddTodo} setVisibilidadAddTodo={setVisibilidadAddTodo} agregarTodo={agregarTodo} proyectoActual={proyectoActual} proyectos={proyectos} />

      <Header />
      
      <Proyectos proyectos={proyectos} agregarProyecto={agregarProyecto} proyectoActual={proyectoActual} setProyectoActual={setProyectoActual} setVisibilidadAddProyecto={setVisibilidadAddProyecto} eliminarProyecto={eliminarProyecto} />
      
      <ContPrincipal proyectos={proyectos} proyectoActual={proyectoActual} setVisibilidadAddTodo={setVisibilidadAddTodo} setTodoActual={setTodoActual} eliminarTodo={eliminarTodo} />

    </div>
  );
}

export default App;