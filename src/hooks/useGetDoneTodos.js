import { useQuery } from "@tanstack/react-query";
import { fetchDoneTodos } from "../api/fetchDoneTodo.api";


export function useGetDoneTodos() {
  return useQuery({
    queryKey: ["doneTodos"],
    queryFn: fetchDoneTodos,
  })
}