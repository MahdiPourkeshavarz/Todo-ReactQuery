import { TodosForm } from "../../components/todoForm/todoForm";
import { TodosList } from "../../components/todoList/todoList";


export function Home() {

  return (
    <>
      <h2>Todo app</h2>
      <TodosForm />
      <TodosList />
    </>
  )
}