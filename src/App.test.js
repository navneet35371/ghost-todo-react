import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import userEvent, {userevent} from '@testing-library/user-event';

test('renders add todo button', () => {
  render(<App />);
  const addTodoButton = screen.getByText("Add Todo");
  expect(addTodoButton).toBeInTheDocument();
});

test('renders todo list', () => {
  render(<App />);
  const todoList = screen.getByRole("list");
  expect(todoList).toBeInTheDocument();
});

test('renders todo item', () => {
  render(<App />);
  const todoItem = screen.getByText("Learn React");
  expect(todoItem).toBeInTheDocument();
});

test('removes todo item', () => {
  render(<App />);
  const todoItem = screen.getByText("Learn React");
  const deleteTodoButton = screen.getByTestId("delete-button-1");
  act(() => {
    deleteTodoButton.click();
  });
  expect(todoItem).not.toBeInTheDocument();
})

test('completes todo item', () => {
  render(<App />);
  const todoItem = screen.getByText("Learn Redux");
  const completeTodoButton = screen.getByTestId("complete-button-2");
  act(() => {
    completeTodoButton.click();
  });
  expect(todoItem).toHaveClass("completed");
})

test('adds todo item', () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  userEvent.type(input, "New Todo");
  const addTodoButton = screen.getByText("Add Todo");
  act(() => {
    addTodoButton.click();
  });
  const todoItem = screen.getByText("New Todo");
  expect(todoItem).toBeInTheDocument();
});