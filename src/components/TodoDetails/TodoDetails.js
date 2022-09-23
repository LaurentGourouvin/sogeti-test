// Import node_module
import {
  useOutletContext,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";

import Swal from "sweetalert2";

// Import own module
import { useGetTodoById } from "../../hooks/useGetTodoById";
import { Edit } from "../elements/icons/Edit";
import { Back } from "../elements/icons/Back";
import { Trash } from "../elements/icons/Trash";
import { deleteTodo } from "../../utils/utils";

export const TodoDetails = () => {
  // State
  const [todosList, setTodosList] = useOutletContext();

  // Hooks
  const { todoId } = useParams();
  const todo = useGetTodoById(todoId, todosList);
  const navigate = useNavigate();

  // Handlers
  const handleDeleteTodo = () => {
    const filteredTodosList = deleteTodo(todosList, Number(todoId));
    Swal.fire({
      title: `Delete ${todo.title}`,
      text: "Do you want to continue ?",
      icon: "question",
      confirmButtonText: "Delete",
      confirmButtonColor: "#ef4444",
      cancelButtonText: "No",
      cancelButtonColor: "#60a5fa",
      showCancelButton: true,
    }).then((action) => {
      if (action.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "Deleted Sucess",
          confirmButtonColor: "#22c55e",
        });
        navigate("/");
        setTodosList(filteredTodosList);
      }
    });
  };

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
          <span className="hover:text-red-600" onClick={handleDeleteTodo}>
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
