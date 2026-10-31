import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  // destructure todos from the passed props

  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            {todo}
          </TodoCard>
        );
      })}
    </div>
  );
}
