import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/fetchTodos.api";



export function useGetTodos() {
  return useQuery({
    queryKey: ["doneTodos"],
    queryFn: fetchTodos,
    initialData: {todos: [], doneTodos: []}
  })
}