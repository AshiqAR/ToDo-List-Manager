import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let initTodo;
  let i;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
    localStorage.setItem('todos', JSON.stringify([]))
    i = 1;
    localStorage.setItem('i', JSON.stringify(0))
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
    i = JSON.parse(localStorage.getItem('i'))
  }


  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todoItem) => {
    console.log('hello')
    setTodos(todos.filter((todo) => todo !== todoItem))
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo !== todoItem)))
    if (todos.length === 0) {
      console.log(0)
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }

  const addTodo = (title, description) => {
    i = JSON.parse(localStorage.getItem('i')) + 1
    localStorage.setItem('i', JSON.stringify(i))
    let newTodo = { sno: i, title: title, description: description };
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
  }


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


