import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList() {
  let todos = ["scare the neighbors", "Find goblins", "pumpkin pie"];

  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo >{todo}</TodoCard>
        );
      })}
    </div>
  );
}
