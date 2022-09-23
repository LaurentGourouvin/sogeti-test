import App from "../components/App";
import { TodoDetails } from "../components/TodoDetails/TodoDetails";
import { createBrowserRouter } from "react-router-dom";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todo/:todoId",
        element: <TodoDetails />,
      },
      {
        path: "todo/addNewTodo",
        element: <TodoForm />,
      },
    ],
  },
]);
