import React from 'react'
import './todo.css'
import ToDoItem from './ToDoItem'

// I think there's a slight "chicken and egg" scenario with 
// using local storage and probably React state to manage the 
// data where the todo lists are stored. What I think might be the
// most logical structure is on the initial app load a useEffect 
// function will run to check if there is anything stored in 
// local storage and if there isn't then it will push an empty
// array to local storage.
// There will be a separate variable created via useState that will
// be initialised with an empty array. 
// If there IS data in local storage the useEffect will retrieve it
// and pass it to the state variable.
// Have a second useEffect function with the dependency array set to
// the state variable. This will be the one that updates local storage
// with the new data in state.
// THIS MIGHT NEED TO HAVE SOMETHING THAT STOPS IT RUNNING ON LOAD 
// AS THE STATE ARRAY IS GETTING CHANGED WHICH WOULD TRIGGER THIS TO
// RUN BUT ALL IT'S DOING IS PASSING THE INFO JUST RETRIEVED FROM 
// LOCAL STORAGE BACK TO LOCAL STORAGE? MAYBE THERE'S A WAY TO JUST CHECK
// IF THERE'S NO DIFFERENCE BETWEEN STATE AND LOCAL STORAGE THEN DO NOTHING?
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


export default function TodoApp() {
    const [toDoList, setToDoList] = React.useState([])

    // 
    React.useEffect(() => {
        const storedToDoList = localStorage.getItem('toDoList');
        console.log('this is storedTodoList', storedToDoList)
        if(storedToDoList) {
            console.log('I should only appear once')
            setToDoList(JSON.parse(storedToDoList));
        }
    },[]);

    React.useEffect(() => {
        console.log('useEffect triggered')
        localStorage.setItem('toDoList', JSON.stringify(toDoList))
        console.log('this is todolist', toDoList)
    },[toDoList]);

    function addItem() {
        setToDoList((prevList) => [...prevList, 'something' ])
    }
    return (
        <div id='todo-app'>
            <div className='todo-app-header'>
                <h2>To Do:</h2>
                <p>You have ... things left</p>
                <button className='new-todo-item' onClick={() => addItem()}>
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