// Import node module
import { Link } from "react-router-dom";

// Import own module
import { updateStateTodoList } from "../../utils/utils";

export const Todo = ({ setTodosList, todosList, id, title, state }) => {
  // Handler
  const handleChangeCheck = () => {
    const updateList = updateStateTodoList(todosList, id);
    setTodosList(updateList);
  };

  return (
    <article className="flex flex-row gap-3 items-center justify-between">
      <h2 className={`${state && "line-through italic bg-red-100"} p-2 m-1`}>
        <Link to={`todo/${id}`}>{title}</Link>
      </h2>
      <div className="flex flex-col">
        {state ? (
          <input type="checkbox" checked={true} onChange={handleChangeCheck} />
        ) : (
          <input type="checkbox" checked={false} onChange={handleChangeCheck} />
        )}
      </div>
    </article>
  );
};
