
import httpRequest from "../services/httpRequest";


export async function  fetchTodos() {
  const response = await httpRequest.get("/todos");
  const res = await httpRequest.get("/doneTodos")
  console.log('done', res.data)
  console.log('notdone', response.data)
  return {todos: response.data, doneTodos: res.data}
}