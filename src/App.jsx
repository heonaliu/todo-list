import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "scare the neighbors",
    "Find goblins",
    "pumpkin pie",
  ]);

  return (
    <>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
