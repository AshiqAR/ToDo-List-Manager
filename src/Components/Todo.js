


const Todo = (props) => {
    return (
        <div>
            <h5> {props.todo.title}</h5>
            <p>{props.todo.description}</p>
            <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)} >Delete</button>
            <hr />
        </div>
    )
}

export default Todo
