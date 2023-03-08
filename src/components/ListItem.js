import { TrashIcon } from "@heroicons/react/24/outline";

const ListItem = ({ todo, todos, setTodos, filter }) => {
  const handleInputChange = (index) => {
    let newArr = [...todos];
    newArr[index].completed = !newArr[index].completed;
    setTodos(newArr);
  };
  const handleDelete = (id) => {
    let newArr = [...todos];
    const index = newArr.findIndex((x) => x.id === id);
    newArr.splice(index, 1);
    setTodos(newArr);
  };
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          className="peer mr-2 h-6 w-6"
          type="checkbox"
          name="todo-item"
          id={`todo-item-${todo.id}`}
          checked={todo.completed}
          onChange={() => handleInputChange(todo.id - 1)}
        />
        <label
          className="peer-checked:line-through"
          htmlFor={`todo-item-${todo.id}`}
        >
          {todo.body}
        </label>
      </div>
      {filter === "completed" && (
        <button onClick={() => handleDelete(todo.id - 1)} className="group">
          <TrashIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
        </button>
      )}
    </li>
  );
};

export default ListItem;
