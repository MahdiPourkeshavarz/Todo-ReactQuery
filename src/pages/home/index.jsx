import { TodosForm } from "../../components/todoForm/todoForm";
import { TodosList } from "../../components/todoList/todoList";
import { useTodoContext } from "../../context/todos.context";


export function Home() {
  const { editValues } = useTodoContext()
  return (
    <>
      <h2>Todo app</h2>
      <TodosForm editValues={editValues}/>
      <TodosList />
    </>
  )
}