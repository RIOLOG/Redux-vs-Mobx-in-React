import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../features/todoSlice';


const Todo = () => {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);


    return (
        <>
            <h2>TODO LIST</h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Task'/>
            <button onClick={() => dispatch(addTodo(task))}>Add Task</button>

            <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    
        
        </>
    )

}


export default Todo;