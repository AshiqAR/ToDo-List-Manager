import Todo from './Todo'

const Todos = (props) => {

    const containerStyle = {
        minHeight: '100vh',
        margin: '0px auto'
    }

    return (
        <div className="container" style={containerStyle}>
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 ? <p>No Todos to display</p>
                :
                props.todos.map((todoItem) => {
                    return (
                        <Todo key={todoItem.sno} todo={todoItem} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}

export default Todos
