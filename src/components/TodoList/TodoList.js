import { Todo } from "../Todo/Todo";
import { useEffect, useState } from "react";
import dataTodoList from "../../data/todolist.json";
import { sortTodoList } from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";

export const TodoList = (data) => {
  const [todosList, setTodosList] = useState([]);

  // Hooks
  useEffect(() => {
    setTodosList(sortTodoList(dataTodoList));
  }, []);

  return (
    <section>
      {todosList.map((oneTodo) => (
        <Todo
          key={uuidv4()}
          setTodosList={setTodosList}
          data={todosList}
          id={oneTodo.id}
          title={oneTodo.title}
          state={oneTodo.state}
        />
      ))}
    </section>
  );
};
