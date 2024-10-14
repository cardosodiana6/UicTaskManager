export interface Task {
  id: string;
  title: string;
  description: string;
  date_end: Date;
  priority: Priority;
}

export enum Priority {
  low = "low",
  normal = "normal",
  high = "high",
}
