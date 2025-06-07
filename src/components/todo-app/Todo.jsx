import './todo.css'

export default function Todo() {
    return (
        <div id='todo-app'>
            <div className='todo-app-header'>
                <h1>To Do:</h1>
                <p>You have ... things left</p>
                <button className='new-todo-item'>
                    +
                </button>
            </div>
            <div className='todo-app-item-list'>
                <div>

                </div>
            </div>
        </div>
    )
}