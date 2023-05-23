import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import { InitialTodos } from './consts';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(InitialTodos);
  const [newTodo, setNewTodo] = useState("");

  const onTextChange = (event) => {
    setNewTodo(event.target.value);
  }

  const addNewTodo = (event) => {
    event.preventDefault();
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  }

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  const updateTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} removeHandler={removeTodo} updateHandler={updateTodo}/>
      <form onSubmit={addNewTodo}>
        <input type="text" value={newTodo} onChange={onTextChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
