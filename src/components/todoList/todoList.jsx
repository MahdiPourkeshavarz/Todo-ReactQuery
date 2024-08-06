import { useTodoContext } from "../../context/todos.context";
import { TodosItem } from "./todoItem/todoItem";

export function TodosList() {

  const {todos, doneTodos} = useTodoContext()

  return (
    <>
      <div>
        <h1>list</h1>

        <div>
          Unfinished Todos
          {todos &&
            todos.map((todo) => {
              return <TodosItem key={todo.id} {...todo}/>
            })
          }
        </div>

        <div>
          Finished Todos
          {doneTodos &&
            doneTodos.map((todo) => {
              return <TodosItem key={todo.id} {...todo}/>
            })
          }
        </div>
      </div>
    </>
  );
}
