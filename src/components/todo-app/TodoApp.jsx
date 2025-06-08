import './todo.css'
import ToDoItem from './ToDoItem'

// I think there's a slight "chicken and egge" scenario with 
// using local storage and probably React state to manage the 
// data where the todo lists are stored. What I think might be the
// most logical structure is on the initial app load a useEffect 
// function will run to check if there is anything stored in 
// local storage and if there isn't then it will push an empty
// JSON object (or array? Or does that matter?!) to local storage
// There will be a separate variable created via useState that will
// be initialised with an identical empty object/array. 
// This variable is what the useEffect's dependency array will be set to.
// Once the user adds an item to the ToDo list that will trigger
// the stateSetter function for the local state variable and will
// update the object/array with the information the user has added.
// This in turn triggers the useEffect to run and it will push the data
// stored in local state to local storage?
// If there IS something stored in local storage the useEffect will pull
// this in and then push it to the local state variable, is that how it should work?

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


export function TodoApp() {
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