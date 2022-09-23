// Import node_module
import {
  useOutletContext,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Import own module
import { useGetTodoById } from "../../hooks/useGetTodoById";
import { Edit } from "../elements/icons/Edit";
import { Back } from "../elements/icons/Back";
import { Trash } from "../elements/icons/Trash";
import {
  deleteTodo,
  updateTodo as fnUpdateTodo,
  sortTodoList,
} from "../../utils/utils";

export const TodoDetails = () => {
  // State
  const [todosList, setTodosList] = useOutletContext();
  const [editTodo, setEditTodo] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({ title: "", description: "" });

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
          text: "Deleted",
          confirmButtonColor: "#22c55e",
        });
        navigate("/");
        setTodosList(filteredTodosList);
      }
    });
  };

  const handleEditButton = () => {
    setEditTodo(!editTodo);
  };

  const handleChangeUpdateTodo = (e) => {
    setUpdateTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Update ${todo.title}`,
      text: "Do you want to continue ?",
      icon: "question",
      confirmButtonText: "Save",
      confirmButtonColor: "#22c55e",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#ef4444",
      showCancelButton: true,
    }).then((action) => {
      if (action.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "Updated",
          confirmButtonColor: "#22c55e",
        });
        const todosListUpdated = fnUpdateTodo(
          todosList,
          Number(todoId),
          updateTodo
        );
        setTodosList(sortTodoList(todosListUpdated));
      }
    });
  };

  const handleCancelUpdate = () => {
    setEditTodo(false);
  };

  useEffect(() => {
    setUpdateTodo((prevState) => ({
      ...prevState,
      title: todo.title,
      description: todo.description,
    }));
  }, [todo.title, todo.description]);

  return (
    <section
      className={`shadow-2xl p-4 border-2 border-slate-200 rounded bg-white`}
    >
      <h2 className="font-bold text-3xl py-2 flex justify-between hover:underline">
        Todo #{todo.id}
        <span className="flex gap-3">
          <span
            className={`hover:text-green-500 ${editTodo && "text-green-500"}`}
            onClick={handleEditButton}
          >
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
      {!editTodo && (
        <>
          <h3 className="font-semibold text-2xl py-2">{todo.title}</h3>
          <p>{todo.description}</p>
        </>
      )}
      {editTodo && (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            Title
            <input
              onChange={handleChangeUpdateTodo}
              className="p-2 border-2 border-slate-200 text-slate-500"
              type="text"
              name="title"
              id="title"
              value={updateTodo.title}
              required
            />
          </label>
          <label className="flex flex-col">
            Description
            <textarea
              onChange={handleChangeUpdateTodo}
              className="p-2 border-2 border-slate-200 text-slate-500 h-60"
              name="description"
              id="description"
              value={updateTodo.description}
            ></textarea>
          </label>
          <div className="flex flex-row justify-center gap-4 m-4">
            <button
              type="submit"
              className="p-2 rounded bg-green-500 text-white"
            >
              Save
            </button>
            <button
              type="reset"
              onClick={handleCancelUpdate}
              className="p-2 rounded bg-red-500 text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
