import Breadcrumb from "../../../../../core/components/ui/Breadcrumm";
import { IBreadcrumb } from "../../../../../core/types/BreadCrumb.interface";

const breadcrumbs: IBreadcrumb[] = [
  {
    name: "Tareas",
    link: "/",
  },
  {
    name: "Create",
    link: "/tasks/create",
  },
];
const TaskHeader = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-slate-900 text-white">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <h1 className="text-3xl font-bold text-center">Tareas</h1>
    </header>
  );
};

export default TaskHeader;
