import './todo.css'
import ToDoItem from './ToDoItem'

export default function TodoApp() {
    return (
        <div id='todo-app'>
            <div className='todo-app-header'>
                <h2>To Do:</h2>
                <p>You have ... things left</p>
                <button className='new-todo-item'>
                    +
                </button>
            </div>
            <div className='todo-app-item-list'>
                <ToDoItem />
                <ToDoItem />
            </div>
        </div>
    )
}