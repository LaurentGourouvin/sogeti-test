// Import own module
import { TodoList } from "./TodoList/TodoList";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App flex flex-row min-h-screen">
      <aside className="shadow-xl border-r-2 border-slate-50 p-4 w-1/5">
        <h1 className="py-4 font-bold">My TodoList</h1>
        <TodoList />
      </aside>
      <main className="w-1/2 m-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
