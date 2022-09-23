// Import react
import { useState, useEffect } from "react";

// Import own module
import { TodoList } from "./TodoList/TodoList";
import { Outlet, Link } from "react-router-dom";
import { Plus } from "./elements/icons/Plus";
import { Home } from "./elements/icons/Home";
import { sortTodoList } from "../utils/utils";
import { addDate } from "../utils/utils";
import dataTodoList from "../data/todolist.json";

function App() {
  // State
  const [todosList, setTodosList] = useState([]);

  // Hooks
  useEffect(() => {
    if (todosList.length === 0) {
      const todosWithDate = addDate(dataTodoList);
      setTodosList(sortTodoList(todosWithDate));
    }
  }, [todosList.length]);

  return (
    <div className="App flex flex-row min-h-screen">
      <aside className="shadow-xl border-r-2 border-slate-50 p-4 w-1/5 bg-white">
        <span className="flex justify-center">
          <Link to="/">
            <Home />
          </Link>
        </span>

        <h1 className="py-4 font-bold">My TodoList</h1>
        <Link to="todo/addNewTodo">
          <h2 className="flex flex-row gap-4 p-2 bg-green-500 text-white rounded w-fit">
            Add a new Todo
            <Plus />
          </h2>
        </Link>
        <section className="pl-3 ">
          <TodoList todosList={todosList} setTodosList={setTodosList} />
        </section>
      </aside>
      <main className="w-1/2 h-min-screen mx-auto flex flex-col gap-4">
        <section className="py-4">
          <h2 className="font-bold text-5xl py-2">Test de recrutement</h2>
          <h3 className="font-semi text-xl py-2">
            <span className="text-green-500 italic">Gourouvin Laurent</span>
          </h3>
        </section>
        <Outlet context={[todosList, setTodosList]} />
      </main>
    </div>
  );
}

export default App;
