import App from "../components/App";
import { TodoDetails } from "../components/TodoDetails/TodoDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todo/:todoId",
        element: <TodoDetails />,
      },
    ],
  },
]);
