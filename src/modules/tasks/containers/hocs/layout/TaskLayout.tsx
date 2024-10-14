import { Outlet } from "react-router-dom";
import TaskHeader from "./TaskHeader";
function TaskLayout() {
  return (
    <>
      <TaskHeader />

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
export default TaskLayout;
