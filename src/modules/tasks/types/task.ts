export type Task = {
  id: string;
  title: string;
  description: string;
  expirationDate: Date;
  priority: Priority;
  status: Status;
};

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum Status {
  Todo = "Todo",
  InProgress = "InProgress",
  Done = "Done",
}
