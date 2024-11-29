import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../stores/TodoStore";

const Todo = observer(() => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim()) {
      todoStore.addTodo(task);
      setTask("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => todoStore.toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => todoStore.removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Todo;
