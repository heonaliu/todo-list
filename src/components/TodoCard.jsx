export default function TodoCard(props) {
  const { children } = props;

  return (
    <li className="todoItem" key={todoIndex}>
        {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}

// card component will be used inside todo list component
