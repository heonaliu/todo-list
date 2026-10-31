import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "scare the neighbors",
    "find goblins",
    "pumpkin pie",
  ]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);

    //when the state changes of the todo, the DOM changes to match new values
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
      // returns every new todo that is not in the index we want to delete
    })
    setTodos(newTodoList)
  }

  function handlEditTodos(index) {

  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  );
}

export default App;
