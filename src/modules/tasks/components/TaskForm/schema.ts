import { z } from "zod";
import { Priority, Status } from "../../types/task";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  expirationDate: z.date(),
  priority: z.enum([Priority.Low, Priority.Medium, Priority.High]),
  status: z.enum([Status.Todo, Status.InProgress, Status.Done]),
});
