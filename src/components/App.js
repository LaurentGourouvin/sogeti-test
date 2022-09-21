// Import deps
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Import own module
import dataTodoList from "../data/todolist.json";
import { Todo } from "./Todo/Todo";

function App() {
  // State
  const [showTodoList, setShowTodoList] = useState(false);
  const [todosList, setTodosList] = useState([]);

  // Handlers
  const handleClickShowTodos = () => {
    setShowTodoList(!showTodoList);
  };

  // Hooks
  useEffect(() => {
    setTodosList(dataTodoList);
  }, []);

  // Dynamic button
  const btnText = showTodoList ? "Hide" : "Display";

  return (
    <div className="App">
      <button onClick={handleClickShowTodos}>{btnText} my todolist</button>
      {showTodoList &&
        todosList.map((oneTodo) => <Todo key={uuidv4()} {...oneTodo} />)}
    </div>
  );
}

export default App;
