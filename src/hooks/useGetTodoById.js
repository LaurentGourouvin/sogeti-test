import dataTodoList from "../data/todolist.json";
import { useEffect, useState } from "react";

export const useGetTodoById = (id) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const getTodo = dataTodoList.filter((oneTodo) => oneTodo.id === Number(id));
    setTodo(...getTodo);
  }, [id]);

  return todo;
};
