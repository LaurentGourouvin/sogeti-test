import { useEffect, useState } from "react";

export const useGetTodoById = (id, todosList) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const getTodo = todosList.filter((oneTodo) => oneTodo.id === Number(id));
    setTodo(...getTodo);
  }, [todosList, id]);

  return todo;
};
