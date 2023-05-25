import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todoItem) => {
    setTodos(todos.filter((todo) => todo !== todoItem))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Buy pencil',
      description: 'Buy pencil to draw the Bio lab record'
    },
    {
      sno: 2,
      title: 'Go to market',
      description: 'To market to buy grocery'
    },
    {
      sno: 3,
      title: 'Recharge Mobile',
      description: 'Recharge my phone'
    },
  ])
  return (
    <>
      <Header title='Todos List' searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </>
  )
}

export default App;


