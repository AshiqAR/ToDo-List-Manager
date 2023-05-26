const Todo = (props) => {

    return (
        <div className="thisContainer" >
            <div className="item">
                <h5> {props.todo.title}</h5>
                <p>{props.todo.description}</p>
            </div>
            <div className="item" >
                <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)} >Delete ❌</button>
            </div>
            <hr />
        </div>
    )
}

export default Todo
