/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { submitTodo } from "../api/setTodo.api";
import { deleteTodo } from "../api/deleteTodo.api";
import { editTodo } from "../api/editTodo.api";
import { useGeTodos } from "../hooks/useGetTodos";
import { useGetDoneTodos } from "../hooks/useGetDoneTodos";

const todosContext = createContext();

export function TodoProvider({ children }) {

  const queryClient = useQueryClient()
  const {
    data: unDoneTodos,
  } = useGeTodos()

  const {
    data: isDoneTodos,
  } = useGetDoneTodos();

  const [todos, setTodos] = useState(unDoneTodos);
  const [doneTodos, setDoneTodos] = useState(isDoneTodos);
  const [editValues, setEditValues] = useState({});

  const addMutation = useMutation({
    mutationFn: (todo) => submitTodo(todo),
    onSuccess: () => {
      let command = "todos"
      if (todos.isDone === true) {
        command = "doneTodos"
      }
      queryClient.invalidateQueries({ queryKey: command })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (todo) => deleteTodo(todo),
    onSuccess: () => {
      let command = "todos"
      if (todos.isDone === true) {
        command = "doneTodos"
      }
      queryClient.invalidateQueries({ queryKey: command })
    }
  })

  const editMutation = useMutation({
    mutationFn: (todo) => editTodo(todo),
    onSuccess: () => {
      let command = "todos"
      if (todos.isDone === true) {
        command = "doneTodos"
      }
      queryClient.invalidateQueries({ queryKey: command })
    }
  })

  useEffect(() => {
    setDoneTodos(isDoneTodos)
    setTodos(unDoneTodos)
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
    if (todo.id) {
      editMutation.mutate(todo);
    } else {
      addMutation.mutate({ ...todo, id: `${crypto.randomUUID()}` })
    }
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
        onSubmit
      }}
    >
      {children}
    </todosContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(todosContext);
}
