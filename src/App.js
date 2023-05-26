import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') == null) {
    initTodo = [];
    localStorage.setItem('todos', JSON.stringify(initTodo))
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  let i = 0;
  const onDelete = (todoItem) => {
    setTodos(todos.filter((todo) => todo !== todoItem))
    localStorage.setItem('todos', JSON.stringify(todos));
    if (todos.length === 0) {
      i = 0
    }
  }

  const addTodo = (title, description) => {
    i = i + 1
    let newTodo = { sno: i, title: title, description: description };
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const [todos, setTodos] = useState(initTodo);


  return (
    <>
      <Header title='Todos List' searchBar={false} />
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </>
  )
}

export default App;


