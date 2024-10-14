import TaskCard from "../../components/TaskCard";
import { type Task, Priority } from "../../types/task.interface";

const tasks: Task[] = [
  {
    id: "1",
    title: "title",
    description: "description",
    date_end: new Date(),
    priority: Priority.low,
  },
  {
    id: "2",
    title: "title2",
    description: "description2",
    date_end: new Date(),
    priority: Priority.normal,
  },
];
function TaskScreen() {
  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}
export default TaskScreen;
