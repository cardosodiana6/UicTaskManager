export type Task = {
  id: string;
  title: string;
  description: string;
  expirationDate: Date;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "InProgress" | "Done";
};