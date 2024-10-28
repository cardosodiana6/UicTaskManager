import TaskLayout from "@/modules/tasks/containers/hocs/layout/TaskLayout";
import { createBrowserRouter } from "react-router-dom";
import { DashboardContainer } from "./LazyComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskLayout />,
    children: [
      {
        path: "/",
        element: <DashboardContainer />,
      },
    ],
  },
]);

export default router;
