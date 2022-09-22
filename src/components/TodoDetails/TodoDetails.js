// Import node_module
import { useOutletContext, useParams, Link } from "react-router-dom";

// Import own module
import { useGetTodoById } from "../../hooks/useGetTodoById";
import { Edit } from "../elements/icons/Edit";
import { Back } from "../elements/icons/Back";
import { Trash } from "../elements/icons/Trash";

export const TodoDetails = () => {
  // State
  const [todosList] = useOutletContext();

  // Hooks
  const { todoId } = useParams();
  const todo = useGetTodoById(todoId, todosList);

  return (
    <section
      className={`shadow-2xl p-4 border-2 border-slate-200 rounded bg-white`}
    >
      <h2 className="font-bold text-3xl py-2 flex justify-between hover:underline">
        Todo #{todo.id}
        <span className="flex gap-3">
          <span className="hover:text-green-500">
            <Edit />
          </span>
          <span className="hover:text-red-600">
            <Trash />
          </span>
          <Link to="/">
            <span className="hover:text-amber-600">
              <Back />
            </span>
          </Link>
        </span>
      </h2>
      <h3 className="font-semibold text-2xl py-2">{todo.title}</h3>
      <p>{todo.description}</p>
    </section>
  );
};
