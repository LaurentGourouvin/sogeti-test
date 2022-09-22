import { Outlet, useParams } from "react-router-dom";
import { useGetTodoById } from "../../hooks/useGetTodoById";

export const TodoDetails = () => {
  const { todoId } = useParams();
  const todo = useGetTodoById(todoId);

  return (
    <section className={`shadow-2xl p-4 border-2 border-slate-200 rounded `}>
      <Outlet />
      <h2 className="font-bold text-5xl py-2">Todo #{todo.id}</h2>
      <h3 className="font-semibold text-2xl py-2">{todo.title}</h3>
      <p>{todo.description}</p>
    </section>
  );
};
