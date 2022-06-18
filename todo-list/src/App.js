import React from "react";
import './App.css';
import Header from "./components/header.js";
import Proyectos from "./components/Proyectos";
import ContPrincipal from "./components/ContPrincipal";


function Proyecto(nombre, todos) {
  return {nombre, todos};
}

function Todo(descripcion, completado) {
  return {descripcion, completado}
}

function App() {
  const [proyectos, setProyectos] = React.useState([]);
  const [proyectoActual, setProyectoActual] = React.useState(null);
  const [todos, setTodos] = React.useState([]);
  const [todoActual, setTodoActual] = React.useState(null);

  const agregarProyecto = (nombre) => {
    const nuevoProyecto = Proyecto(nombre, []);
    setProyectos([...proyectos, nuevoProyecto]);
    setProyectoActual(nuevoProyecto);
  }

  const agregarTodo = (descripcion) => {
    const nuevoTodo = Todo(descripcion, false);
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
      <Header />
      <Proyectos proyectos={proyectos} agregarProyecto={agregarProyecto} proyectoActual={proyectoActual} setProyectoActual={setProyectoActual}/>
      <ContPrincipal proyectos={proyectos} proyectoActual={proyectoActual} todos={todos} setTodos={setTodos} todoActual={setTodoActual}/>
    </div>
  );
}

export default App;
