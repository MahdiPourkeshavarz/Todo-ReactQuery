/* eslint-disable react/prop-types */
import { useTodoContext } from "../../../context/todos.context"


export function TodosItem({todo}) {

  const {onDelete, onEdit, onDone, onIsNotDone} = useTodoContext()

  return (
    <>
      <div>
        <p>{todo.title}</p>
        <button onClick={() => {
          if (todo.isDone) {
            onIsNotDone(todo)
          } else {
            onDone(todo)
          }
        }}>{todo.isDone ? "not finished" : "finished"}</button>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo)}>delete</button>
    </div>
    </>
  )
}