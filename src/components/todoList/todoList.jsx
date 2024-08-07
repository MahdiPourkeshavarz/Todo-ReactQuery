import { useTodoContext } from "../../context/todos.context";
import { TodosItem } from "./todoItem/todoItem";

export function TodosList() {
  const { todos, doneTodos } = useTodoContext();

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Unfinished Todos</h2>
        <div className="space-y-2">
          {todos &&
            todos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Finished Todos</h2>
        <div className="space-y-2">
          {doneTodos &&
            doneTodos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
        </div>
      </div>
    </div>
  );
}
