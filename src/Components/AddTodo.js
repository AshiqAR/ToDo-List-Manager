import React, { useState } from 'react'
import './addTodo.css'

export default function AddTodo({ addTodo }) {
    const [todo, setTodo] = useState({ title: '', description: '' })

    const containerStyle = {
        minHeight: '80vh',
        padding: '5px 20px'
    }

    const submit = (e) => {
        e.preventDefault();
        if (todo.title === "" || todo.description === "") {
            alert("Title or Description cannot be blank")
        }
        else {
            addTodo(todo.title, todo.description);
            setTodo({ title: '', description: '' })
        }
    }

    return (
        <div className='container my-3' style={containerStyle} >
            <h3 className='text-center' >Add a Todo</h3>
            <form id='addTodoForm' onSubmit={submit}>
                <div className="mb-3 ">
                    <label htmlFor="todoTitle" className="form-label">To Do Title</label>
                    <input type="text" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">To Do Description</label>
                    <input type="text" value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-primary bg-success" id='addBtn'>Add ✔</button>

            </form>
        </div>
    )
}
