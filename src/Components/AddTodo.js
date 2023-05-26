import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title === "" || description === "") {
            alert("Title or Description cannot be blank")
        }
        addTodo(title, description);
    }

    return (
        <div className='container my-3' >
            <h3 className='text-center'>Add a Todo</h3>
            <form id='addTodoForm' onSubmit={submit}>
                <div className="mb-3 ">
                    <label htmlFor="todoTitle" className="form-label">To Do Title</label>
                    <input type="text" defaultValue={""} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">To Do Description</label>
                    <input type="text" defaultValue={""} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-primary bg-success" id='addBtn'>Add ✔</button>

            </form>
        </div>
    )
}
