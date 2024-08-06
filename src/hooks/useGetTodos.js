import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/fetchTodos.api";



export function useGeTodos() {
  return useQuery({
    queryKey: ["doneTodos"],
    queryFn: fetchTodos,
  })
}