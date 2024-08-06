/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTodoContext } from "../../context/todos.context"



export function TodosForm({editValues}) {
  const { onSubmit } = useTodoContext()
  const [value, setValue] = useState("")
  const [status, setStatus] = useState(false)
  return (
    <>
      <div>
        <input type="text" placeholder="Enter Todo" required onChange={(e) => setValue(e.target.value)} value={editValues.title}/>
        <select name="status" id="status" required onClick={(e) => e.target.value === "done" ? setStatus(true) : setStatus(false)} value={editValues.isDone === true ? "Done" : "NotDone"}>
          <option value="not-done" selected>Not Done</option>
          <option value="done">Done</option>
        </select>
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          onSubmit({title: value, isDone: status})
        }}>Submit</button>
      </div>
    </>
  )
}

