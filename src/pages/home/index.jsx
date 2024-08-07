import { TodosForm } from "../../components/todoForm/todoForm";
import { TodosList } from "../../components/todoList/todoList";
import { useTodoContext } from "../../context/todos.context";


export function Home() {
  const { editValues } = useTodoContext()
  return (
    <>
      <p className="flex justify-center pt-4 text-2xl">Todo app</p>
      <TodosForm values={editValues}/>
      <TodosList />
    </>
  )
}