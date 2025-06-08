import TrashCan from "../../assets/icons/TrashCan"

export default function ToDoItem() {
    return (
        <div className='todo-app-item'>
            <input type="checkbox" id="todo1" name="todo1" value="Bike" />
            <label for="todo1"> Build todo app</label>

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