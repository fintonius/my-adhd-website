import React from 'react'
import './todo.css'
import ToDoItem from './ToDoItem'

// PSEUDO CODE FOR ADDING TODO ITEM:
// User clicks 'new item' button
// Opens a box they can enter text in. Use a form element as it gives 
// functionality around submitting text and capturing user's "live text"?
// They click the 'add' button when finished
// This triggers an on submit event which will run a stateSetter function
// which will update local state. This in turn triggers the useEffect function
// with the local state variable set as it's dependency array to run which 
// pushes the newly updated todo list to local storage
// Does pushing the info to local storage cause a rerender of the App?

export default function TodoApp() {
    
    const [toDoList, setToDoList] = React.useState([])
    const [hasLoaded, setHasLoaded] = React.useState(false)
    const [newToDo, setnewToDo] = React.useState(false)

    React.useEffect(() => {
        const storedToDoList = localStorage.getItem('toDoList');
        if(storedToDoList) {
            setToDoList(JSON.parse(storedToDoList));
            // setToDoList([]);
        }
        setHasLoaded(true)
    },[]);

    React.useEffect(() => {
        if(hasLoaded) {
            localStorage.setItem('toDoList', JSON.stringify(toDoList))
            console.log(toDoList)
        }        
    },[toDoList, hasLoaded]);

    function openNewToDo() {
        setnewToDo(!newToDo)
    }

    function addNewToDo(formData) {
        let uuid = self.crypto.randomUUID();
        console.log(uuid); 
         
        const todo = {
            message: formData.get('todo'),
            id: uuid
        }       
        setToDoList((prevList) => [...prevList, todo])
        setnewToDo(!newToDo)
    }

    function deleteToDo(id) {
        setToDoList((prevList) => {
           return prevList.filter((todo) => todo.id !== id)
        })
        console.log('updated todo list', toDoList)
    }

    function editToDo(id) {
        console.log(`you're not so bad todo, you just need to change a little`, id)
    }

    const listToRender = toDoList.map((todo) => {
        return <ToDoItem 
          key={todo.id}
          todoText={todo.message}
          todoId={todo.id}
          deleteToDo={deleteToDo}
          editToDo={editToDo}        
        />
    })

    const newToDoForm = <form 
        className='new-todo'
        action={addNewToDo}
      >
        <textarea 
          name='todo' 
          className='todo-text-area'
        >
          this is a test
        </textarea>
        <button>Add</button>
      </form>

    return (
        <div id='todo-app'>
            <div className='todo-app-header'>
                <h2>To Do:</h2>
                <p>You have {toDoList.length} things left</p>
                <button className='new-todo-item' onClick={() => openNewToDo()}>
                    +
                </button>
            </div>
            <div>{newToDo ? newToDoForm : null}</div>
            <div className='todo-app-item-list'>
                {listToRender}
            </div>
        </div>
    )
}