export default function TodoCard() {
  return (
    <li className="todoItem" key={todoIndex}>
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}

// card component will be used inside todo list component
