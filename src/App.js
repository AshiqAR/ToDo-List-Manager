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
    setTodos(todos.filter((todo) => todo !== todoItem))
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo !== todoItem)))
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
      <div className="display-container">
        <Todos todos={todos} onDelete={onDelete}></Todos>
        <AddTodo addTodo={addTodo}></AddTodo>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;


