import TrashCan from "../../assets/icons/TrashCan"

export default function ToDoItem({todoText}) {
    return (
        <div className='todo-app-item'>
            <input type="checkbox" id="todo1" name="todo1" value="Bike" />
            <label htmlFor="todo1">{todoText}</label>

            <div className="todo-app-item-buttons">
                <button className="todo-app-item-button delete">
                    🗑️ 
                </button>
                <button className="todo-app-item-button edit">
                     ✏️
                </button>
            </div>
        </div>
    )
}