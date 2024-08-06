import httpRequest from "../services/httpRequest";


export async function editTodo(todo) {
  let url = ""
  if (todo.isDone === true) {
    url = "/doneTodos"
  } else {
    url = "/todos"
  }
  const response = await httpRequest.put(url, todo);
  return response.statusText;
}