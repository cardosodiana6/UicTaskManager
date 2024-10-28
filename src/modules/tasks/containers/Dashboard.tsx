import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { toast } from "sonner";
import DashboardFilters from "../components/filter/Filters.tsx";
import DashboardTabsContainer from "../components/TabsContainer.tsx";
import DashboardTaskFormContainer from "../components/TaskForm/TaskFormContainer";
import { DashboardTaskDeleteConfirmation } from "../components/TaskList/TaskDelete";
import TaskListContainer from "../components/TaskList/TaskListContainer";
import useDashboardStore from "../store/dashboard";
import { Task } from "../types/task";

const DashboardContainer = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const {
    isCreateModalOpen,
    setCreateModalOpen,
    updateTask,
    deleteTask,
    addTask,
    tasks,
    selectedTask,
    setSelectedTask,
  } = useDashboardStore();

  const onCreateUpdate = (data: Task) => {
    if (data.id) {
      updateTask(data);
      toast("Task updated successfully");
    } else {
      data = { ...data, id: crypto.randomUUID() };
      addTask(data);
      toast("Task added successfully");
    }
    setCreateModalOpen(false);
  };

  const onDeleteTask = () => {
    if (!selectedTask) return;
    deleteTask(selectedTask.id);
    setOpenDelete(false);
  };

  const onRequestDelete = (task: Task) => {
    setSelectedTask(task);
    setOpenDelete(true);
  };

  return (
    <DashboardTabsContainer filters={<DashboardFilters />}>
      <TabsContent value="task_list">
        <TaskListContainer tasks={tasks} onDelete={onRequestDelete} />
      </TabsContent>
      <DashboardTaskDeleteConfirmation
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteTask}
      />
      <DashboardTaskFormContainer
        isOpen={isCreateModalOpen}
        setIsOpen={() => setCreateModalOpen(false)}
        onHandleSubmit={onCreateUpdate}
      />
    </DashboardTabsContainer>
  );
};

export default DashboardContainer;