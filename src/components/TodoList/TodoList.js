import React from "react";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = ({ todos, removeHandler, updateHandler }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeHandler={removeHandler} updateHandler={updateHandler} />
            ))}
        </ul>
    );
}

export default TodoList;