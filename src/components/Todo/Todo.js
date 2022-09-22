import { updateTodoList } from "../../utils/utils";

export const Todo = ({ setTodosList, data, id, title, state }) => {
  const handleChangeCheck = () => {
    const updateList = updateTodoList(data, id);
    setTodosList(updateList);
  };

  return (
    <article className="flex flex-row">
      <h2 className={`${state && "line-through"}`}>{title}</h2>
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
