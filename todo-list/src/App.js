import React from "react";
import './App.css';
import Header from "./components/header.js";


function Proyecto(nombre, todos) {
  this.nombre = nombre;
  this.todos = todos;
}

function Todo(descripcion, completado) {
  this.descripcion = descripcion;
  this.completado = completado;
}

function App() {
  const [proyectos, setProyectos] = React.useState([]);
  const [proyectoActual, setProyectoActual] = React.useState(null);
  const [todos, setTodos] = React.useState([]);
  const [todoActual, setTodoActual] = React.useState(null);

  const agregarProyecto = (nombre) => {
    const nuevoProyecto = new Proyecto(nombre, []);
    setProyectos([...proyectos, nuevoProyecto]);
    setProyectoActual(nuevoProyecto);
  }

  const agregarTodo = (descripcion) => {
    const nuevoTodo = new Todo(descripcion, false);
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
      {(todos[0] === undefined ? <h2>No hay todos</h2> : 
      todos.map((todo, index) => {
        return(
          <div key={index}>{todo.descripcion}</div>
        )
      }))}
      <button onClick={()=> agregarTodo("hola")}>Agregar todo</button>
    </div>
  );
}

export default App;
