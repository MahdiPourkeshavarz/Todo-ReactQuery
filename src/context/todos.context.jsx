/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { submitTodo } from "../api/setTodo.api";
import { deleteTodo } from "../api/deleteTodo.api";
import { editTodo } from "../api/editTodo.api";
import { useGetTodos } from "../hooks/useGetTodos";


const todosContext = createContext();

export function TodoProvider({ children }) {

  const queryClient = useQueryClient()
  const {
    data: { todos: unDoneTodos, doneTodos: isDoneTodos },
    refetch
  } = useGetTodos()


  const [todos, setTodos] = useState(unDoneTodos || []);
  const [doneTodos, setDoneTodos] = useState(isDoneTodos || []);
  const [editValues, setEditValues] = useState({
    title: "",
    isDone: false
  });
  const [currentTodo, setCurrentTodo] = useState({})

  const addMutation = useMutation({
    mutationFn: (todo) => submitTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: currentTodo.isDone ? "doneTodos" : "todos" })
      refetch()
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (todo) => deleteTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: currentTodo.isDone ? "doneTodos" : "todos" })
      refetch()
    }
  })

  const editMutation = useMutation({
    mutationFn: (todo) => editTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: currentTodo.isDone ? "doneTodos" : "todos" })
      refetch()
    }
  })

  useEffect(() => {
    setDoneTodos(isDoneTodos)
    setTodos(unDoneTodos)
    console.log(unDoneTodos);
    console.log(isDoneTodos);
  }, [unDoneTodos, isDoneTodos])

  function onDelete(todo) {
    deleteMutation.mutate(todo);
  }

  function onEdit(todo) {
    setEditValues(todo)
  }

  function onDone(todo) {
    addMutation.mutate({...todo, isDone: true});
    deleteMutation.mutate(todo)
  }

  function onIsNotDone(todo) {
    addMutation.mutate({ ...todo, isDone: false })
    deleteMutation.mutate(todo)
  }
  function onSubmit(todo) {
    if (editValues.id) {
      editMutation.mutate(
        { ...editValues, ...todo },
        {
          onSuccess: () => {
            // Invalidate and refetch the todos list
            queryClient.invalidateQueries("todos");
            queryClient.invalidateQueries("doneTodos");
          },
        }
      );
      setEditValues({
        title: "",
        isDone: false
      })
    } else {
      addMutation.mutate({ ...todo, id: `${crypto.randomUUID()}` });
      setEditValues({
        title: "",
        isDone: false
      })
    }
  }

  function todoInAction(todo) {
    setCurrentTodo(todo)
  }


  return (
    <todosContext.Provider
      value={{
        todos,
        doneTodos,
        editValues,
        onDelete,
        onEdit,
        onDone,
        onIsNotDone,
        onSubmit,
        todoInAction
      }}
    >
      {children}
    </todosContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(todosContext);
}
