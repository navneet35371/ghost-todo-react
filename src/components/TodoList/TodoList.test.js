import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { InitialTodos } from "../../consts";

test("renders list of todos", () => {
    render(<TodoList todos={InitialTodos} />);
    const todoListItems = screen.getAllByRole("listitem");
    expect(todoListItems.length).toBe(3);
});

test("renders delete todo button", () => {
    render(<TodoList todos={InitialTodos} />);
    const deleteTodoButtons = screen.getAllByText("Delete");
    expect(deleteTodoButtons.length).toBe(3);
});

test("renders complete todo button", () => {
    render(<TodoList todos={InitialTodos} />);
    const completeTodoButtons = screen.getAllByText("Complete");
    expect(completeTodoButtons.length).toBe(3);
});