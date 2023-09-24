import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () =>
{
  const [todos, setTodos] = useState([]);
  useEffect(() =>
  {
    const sessionTodos = sessionStorage.getItem("todos");
    console.log({ sessionStorage });
    if (sessionTodos)
    {
      setTodos(JSON.parse(sessionTodos));
    }
  }, []);

  const addTodos = async todo =>
  {
    setTodos([...todos, todo]);
  };

  useEffect(() =>
  {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id =>
  {
    setTodos(todos.filter(a => a.id !== id));
  };

  return (
    <Container fluid>
      
      <h1>To do from Session Storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos}></TodoForm>
    </Container>


  );
};
export default App;
