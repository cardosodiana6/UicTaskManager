import { lazy } from "react";

export const TaskLayout = lazy(
  () => import("../../modules/tasks/containers/hocs/layout/TaskLayout")
);
