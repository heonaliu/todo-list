import React from "react";

export default function TodoList() {
  let todos = ["scare the neighbors", "Find goblins", "pumpkin pie"];

  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return <li className="todoItem" key={todoIndex}>{todo}</li>;
      })}
    </div>
  );
}
