import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";
import { Priority, Status, Task } from "../../types/task";
import { zodResolver } from "@hookform/resolvers/zod";
import TaskForm from "./TaskForm";
import { Form } from "@/components/ui/form";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  onHandleSubmit: (data: Task) => void;
};

const TaskFormContainer: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onHandleSubmit,
}) => {
  const form = useForm<Task>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      expirationDate: new Date(),
      priority: Priority.Medium,
      status: Status.Todo,
    },
  });
  function onSubmit(value: Task) {
    console.log(value);
    onHandleSubmit(value);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TaskForm />

            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormContainer;
