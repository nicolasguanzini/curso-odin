import React from "react";
import './App.css';
import Header from "./components/header.js";
import Proyectos from "./components/Proyectos";
import ContPrincipal from "./components/ContPrincipal";
import Addproject from "./components/Addproject";


function ProyectoFactory(nombre, todos) {
  return {nombre, todos};
}

function TodoFactory(descripcion, completado) {
  return {descripcion, completado}
}

function App() {
  const [proyectos, setProyectos] = React.useState([]);
  const [proyectoActual, setProyectoActual] = React.useState(null);
  const [todos, setTodos] = React.useState([]);
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

  const agregarTodo = (descripcion) => {
    const nuevoTodo = TodoFactory(descripcion, false);
    setTodos([...todos, nuevoTodo]);
    setTodoActual(nuevoTodo);
  }

  const eliminarProyecto = (proyecto) => {
    setProyectos(proyectos.filter(p => p.nombre !== proyecto.nombre));
    
  }

  const eliminarTodo = (todo) => {
    setTodos(todos.filter(t => t.descripcion !== todo.descripcion));
  }

  return (
    <div className="App">
      <Addproject agregarProyecto={agregarProyecto} visibilidadAddProyecto={visibilidadAddProyecto} setVisibilidadAddProyecto={setVisibilidadAddProyecto}/>

      <Header />
      
      <Proyectos proyectos={proyectos} agregarProyecto={agregarProyecto} proyectoActual={proyectoActual} setProyectoActual={setProyectoActual} setVisibilidadAddProyecto={setVisibilidadAddProyecto} eliminarProyecto={eliminarProyecto} />

      <ContPrincipal proyectos={proyectos} proyectoActual={proyectoActual} todos={todos} setTodos={setTodos} todoActual={setTodoActual}/>

    </div>
  );
}

export default App;
