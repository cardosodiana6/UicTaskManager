import { lazy } from "react";

export const DashboardContainer = lazy(
  () => import("../../modules/tasks/containers/Dashboard")
);
