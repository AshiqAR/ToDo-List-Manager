import Todo from './Todo'
import './todos.css'

const Todos = (props) => {

    const containerStyle = {
        minHeight: '90vh',
        margin: '0px auto',
        borderRight: '1px solid black'
    }

    return (
        <div className="container" style={containerStyle}>
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 ? <p><b>No Todos to display!</b></p>
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
