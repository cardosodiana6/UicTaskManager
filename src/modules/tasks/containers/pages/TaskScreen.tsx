import { Button } from "@/components/ui/button";
import TaskCard from "../../components/TaskCard";
import { type Task } from "../../types/task";
import TaskFormContainer from "../../components/TaskForm/TaskFormContainer";
import { useState } from "react";

const tasks: Task[] = [
  {
    id: "1",
    title: "title",
    description: "description",
    expirationDate: new Date(),
    priority: "Low",
    status: "Todo",
  },
  {
    id: "2",
    title: "title2",
    description: "description2",
    expirationDate: new Date(),
    priority: "Medium",
    status: "InProgress",
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
