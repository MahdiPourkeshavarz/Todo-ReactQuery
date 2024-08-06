import httpRequest from "../services/httpRequest";



export async function deleteTodo(todo) {
  let url = ""
  if (todo.isDone === true) {
    url = "/doneTodos"
  } else {
    url = "/todos"
  }
  const response = await httpRequest.delete(`${url}/${todo.id}`);
  return response.statusText;
}