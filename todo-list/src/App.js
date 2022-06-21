import React, { useEffect } from "react";
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


  useEffect(
    ()=>{
      const input = document.getElementById("proyectoNuevo");
      input.focus();
    }
  ,[visibilidadAddProyecto]);

  useEffect(
    ()=>{
      const input = document.getElementById("todoNuevo");
      input.focus();
    }
  ,[visibilidadAddTodo]);


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
        if(proyectos[indiceProyecto].todos[i].descripcion === descripcion){
          alert("Ya existe una tarea con esa descripción");
          return;
        }}
        
        let clonProyectos = [...proyectos];
        clonProyectos[indiceProyecto].todos.push(nuevoTodo);
        setProyectos(clonProyectos);
        setTodoActual(nuevoTodo);
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

  const eliminarTodo = (todo) => {
    const indiceProyecto = proyectos.findIndex(proy => proy.nombre === todo.proyecto);
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
      
      <ContPrincipal proyectos={proyectos} proyectoActual={proyectoActual} setVisibilidadAddTodo={setVisibilidadAddTodo} setTodoActual={setTodoActual} todoActual={todoActual} eliminarTodo={eliminarTodo} />

    </div>
  );
}

export default App;