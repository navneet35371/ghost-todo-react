import React from "react";
import { render, screen } from "@testing-library/react";
import { InitialTodos } from "../../consts";
import TodoItem from "./TodoItem";

test("renders todo item", () => {
    render(<TodoItem todo={InitialTodos[0]} />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).toBeInTheDocument();
}
);

test("renders delete todo button", () => {
    render(<TodoItem todo={InitialTodos[0]} />);
    const deleteTodoButton = screen.getByText("Delete");
    expect(deleteTodoButton).toBeInTheDocument();
});

test("renders complete todo button", () => {
    render(<TodoItem todo={InitialTodos[0]} />);
    const completeTodoButton = screen.getByText("Complete");
    expect(completeTodoButton).toBeInTheDocument();
});

test("renders todo item with completed class", () => {
    render(<TodoItem todo={InitialTodos[0]} />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).toHaveClass("completed");
});

test("renders todo item without completed class", () => {
    render(<TodoItem todo={InitialTodos[1]} />);
    const todoItem = screen.getByText("Learn Redux");
    expect(todoItem).not.toHaveClass("completed");
});

