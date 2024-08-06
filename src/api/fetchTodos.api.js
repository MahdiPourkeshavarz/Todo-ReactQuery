
import httpRequest from "../services/httpRequest";


export async function  fetchTodos() {
  const response = await httpRequest.get("/todos");

  return response.data
}