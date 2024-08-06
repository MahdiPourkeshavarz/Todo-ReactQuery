import httpRequest from "../services/httpRequest";



export async function submitTodo(todo) {
  let url = ""
  if (todo.isDone === true) {
    url = "/doneTodos"
  } else {
    url = "/todos"
  }
  const response = await httpRequest.post(url, todo);
  return response.statusText;
}