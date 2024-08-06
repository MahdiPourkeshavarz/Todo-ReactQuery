import httpRequest from "../services/httpRequest";


export async function fetchDoneTodos() {
  const response = await httpRequest.get("/doneTodos");

  return response.data;
}