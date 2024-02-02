import React, { useState } from 'react'
import './App.css'

function App() {
   // State for the input value
   const [inputValue, setInputValue] = useState("");
  
   // State for managing tasks
   const [task, setTask] = useState([]);
 
   // Handle input change
   function handleInputChange(e) {
     setInputValue(e.target.value);
     console.log(e.target.value);
   }
 
   // Add a new task
   function addTask() {
     if (inputValue !== "") {
       // Create a new task object with the given value when clicking the "Add" button
       const newTask = {
         id: Date.now(), // Use a timestamp as id
         task: inputValue,
         taskCompleted: false
       };
       
       // Add the current task object to the task list
       setTask([...task, newTask]);
       
       // Clear the input value
       setInputValue("");
     }
   }
 
   // Handle checking/unchecking a task
   const taskcheck = (id) => {
     // Check the task which has the checkbox checked, then toggle its completed status
     const updatedTodos = task.map((todo) => {
       if (todo.id === id) {
         return { ...todo, taskCompleted: !todo.taskCompleted };
       }
       return todo;
     });
     
     // Update the task list with the modified tasks
     setTask(updatedTodos);
     console.log(updatedTodos);
   };
 
   // Remove a task
   const removetask = (id) => {
     // Filter out the task with the specified id
     const filteredTodos = task.filter((todo) => todo.id !== id);
     
     // Update the task list without the removed task
     setTask(filteredTodos);
   };


  return (
    <>
      <div className="todo-app">
        <div className="input">
        <h1>To-Do List<i class="ri-git-repository-fill"></i></h1>
        <input className='task-input' type="text" onChange={handleInputChange} value={inputValue} placeholder='Enter task'/>
        <button className='task-add' onClick={addTask}>Add</button>

        </div>
        <ul>
          {task.map((todo)=>{
           return(
            <> 
            {/* // adding task in the form of list by mapping task array values */}
              <li className={`todo-item ${todo.taskCompleted == true? "completed" : ""}`}>
                <input className='checkbox' type="checkbox" onChange={()=>{
                    taskcheck(todo.id)
                }}
                 name="" id="" />
                <span className='text'>{todo.task}</span>
                <button className='delete-task' onClick={() => removetask(todo.id)}><i class="ri-delete-bin-line"></i></button>
              </li>
            </>
           ) 
          })}
        </ul>
      </div>
    </>
  )
}

export default App
