import { Outlet } from "react-router-dom";
function TaskLayout() {
  return (
    <main className="container mx-auto p-4">
      <Outlet />
    </main>
  );
}
export default TaskLayout;
