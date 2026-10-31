import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "scare the neighbors",
    "find goblins",
    "pumpkin pie",
  ]);
  const [todoValue, setTodoValue] = useState("");


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

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    //take the value and set it to the text box
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index) // delete it since we're editing it
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  );
}

export default App;
