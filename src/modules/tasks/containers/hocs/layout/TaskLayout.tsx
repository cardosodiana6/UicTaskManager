import { Outlet } from "react-router-dom";
function TaskLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}
export default TaskLayout;
