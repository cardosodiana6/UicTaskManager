import { createBrowserRouter } from "react-router-dom";
import { TaskLayout } from "./LazyComponent";
import TaskScreen from "../../modules/tasks/containers/pages/TaskScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskLayout />,
    children: [
      {
        path: "",
        element: <TaskScreen />,
      },
      {
        path: "/tasks/create",
        element: <TaskScreen />,
      },
    ],
  },
]);

export default router;
