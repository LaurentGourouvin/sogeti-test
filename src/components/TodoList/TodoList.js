// Import node_module
import { v4 as uuidv4 } from "uuid";

// Import own module
import { Todo } from "../Todo/Todo";

export const TodoList = ({ todosList, setTodosList }) => {
  return (
    <section>
      <div className="flex justify-between font-light my-4">
        <p className="pl-3">Title</p>
        <p>Done?</p>
      </div>
      <hr className="border-2 border-slate-100" />
      {todosList.map((oneTodo) => (
        <Todo
          key={uuidv4()}
          setTodosList={setTodosList}
          todosList={todosList}
          id={oneTodo.id}
          title={oneTodo.title}
          state={oneTodo.state}
        />
      ))}
    </section>
  );
};
