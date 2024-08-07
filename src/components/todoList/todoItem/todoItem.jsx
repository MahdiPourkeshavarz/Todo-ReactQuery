/* eslint-disable react/prop-types */
import { useTodoContext } from "../../../context/todos.context";

export function TodosItem({ todo }) {
  const { onDelete, onEdit, onDone, onIsNotDone, todoInAction } = useTodoContext();

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded shadow-sm">
      <p className="text-lg">{todo?.title}</p>
      <div className="flex space-x-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none"
          onClick={() => {
            if (todo?.isDone) {
              onIsNotDone(todo);
            } else {
              onDone(todo);
            }
            todoInAction(todo)
          }}
        >
          {todo?.isDone ? "Not Finished" : "Finished"}
        </button>
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none"
          onClick={() => {
            onEdit(todo);
            todoInAction(todo)
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
          onClick={() => {
            onDelete(todo)
            todoInAction(todo)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}