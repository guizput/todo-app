import { TrashIcon } from "@heroicons/react/24/outline";

const List = ({ filter }) => {
  return (
    <div>
      <ul className="my-8 flex flex-col space-y-6">
        <li className="flex items-center">
          <input
            className="peer mr-2 h-6 w-6"
            type="checkbox"
            name="todo-item"
            id="todo-item-1"
          />
          <label className="peer-checked:line-through" htmlFor="todo-item-1">
            qsdkqjshq qfs ds fsfsdf fdsf
          </label>
        </li>
        <li className="flex items-center">
          <input
            className="peer mr-2 h-6 w-6"
            type="checkbox"
            name="todo-item"
            id="todo-item-2"
          />
          <label className="peer-checked:line-through" htmlFor="todo-item-2">
            qsdkqjshq qfs ds fsfsdf fdsf
          </label>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              className="peer mr-2 h-6 w-6"
              type="checkbox"
              name="todo-item"
              id="todo-item-3"
            />
            <label className="peer-checked:line-through" htmlFor="todo-item-3">
              qsdkqjshq qfs ds fsfsdf fdsf
            </label>
          </div>
          {filter === "completed" && (
            <button className="group">
              <TrashIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            </button>
          )}
        </li>
      </ul>
      {filter === "completed" && (
        <div className="flex justify-end">
          <button className="flex items-center justify-center rounded-lg bg-red-500 px-8 py-4 text-white hover:bg-red-600">
            <TrashIcon className="mr-2 h-4 w-4 text-white group-hover:text-gray-500" />
            delete all
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
