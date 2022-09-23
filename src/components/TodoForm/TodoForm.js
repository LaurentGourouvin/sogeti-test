// Import node_module
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import own module
import { incrementId } from "../../utils/utils";

export const TodoForm = () => {
  //State
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    state: false,
  });

  // Hooks
  const [todosList, setTodosList] = useOutletContext();
  const navigate = useNavigate();

  //Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = incrementId(todosList);
    const newTodoWithId = {
      ...newTodo,
      id: newId,
      createdAt: Date.parse(new Date()),
    };

    Swal.fire({
      title: "Create a new todo",
      text: `Do you want to create "${newTodo.title}" ?`,
      icon: "question",
      confirmButtonText: "Create",
      confirmButtonColor: "#22c55e",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#ef4444",
      showCancelButton: true,
    }).then((action) => {
      if (action.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "Done !",
          confirmButtonColor: "#22c55e",
        });
        // add new todo to my todosList (top of the list)
        setTodosList((prevState) => [newTodoWithId, ...prevState]);
        handleReset();
        navigate(`/todo/${newTodoWithId.id}`);
      }
    });
  };

  const handleReset = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: "",
      description: "",
      state: false,
    }));
  };

  const handleChangeNewTodo = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <article className="font-bold text-xl p-5">Create a new Todo</article>
      <form
        className="flex flex-col items-center shadow-lg p-5 border-2 border-slate-50"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col mb-4">
          <span className="text-lg pb-2">Title</span>
          <input
            className="p-2 rounded border-2"
            type="text"
            name="title"
            id="title"
            placeholder="My new Todo"
            onChange={handleChangeNewTodo}
            value={newTodo.title}
            required
          />
        </label>
        <label className="flex flex-col mb-4">
          <span className="text-lg pb-2">Description</span>
          <textarea
            className="h-24 w-72 rounded border-2 "
            type="textarea"
            name="description"
            id="description"
            placeholder="This is my new todo about..."
            onChange={handleChangeNewTodo}
            value={newTodo.description}
          />
        </label>
        <div className="flex flex-row gap-4 m-4">
          <button type="submit" className="p-2 rounded bg-green-500 text-white">
            Save
          </button>
          <button
            type="reset"
            className="p-2 rounded bg-red-500 text-white"
            onClick={handleReset}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};
