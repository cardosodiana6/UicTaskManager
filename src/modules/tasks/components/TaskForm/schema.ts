import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  expirationDate: z.date(),
  priority: z.enum(["Low", "Medium", "High"]),
  status: z.enum(["Todo", "InProgress", "Done"]),
});
