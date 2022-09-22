import { updateTodoList } from "../../utils/utils";
import { Link } from "react-router-dom";

export const Todo = ({ setTodosList, data, id, title, state }) => {
  const handleChangeCheck = () => {
    const updateList = updateTodoList(data, id);
    setTodosList(updateList);
  };

  return (
    <article className="flex flex-row gap-3 items-center">
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
