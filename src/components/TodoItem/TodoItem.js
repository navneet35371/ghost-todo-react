import React from "react";

const TodoItem = ({ todo, removeHandler, updateHandler }) => {
    return (
        <li className={todo.completed ? "completed" : ""}>
            {todo.title}
            <button onClick={() => updateHandler(todo.id)} data-testid={`complete-button-${todo.id}`}>Complete</button>
            <button onClick={() => removeHandler(todo.id)} data-testid={`delete-button-${todo.id}`}>Delete</button>
        </li>
    );
}

export default TodoItem;