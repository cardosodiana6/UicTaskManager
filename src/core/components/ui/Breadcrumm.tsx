import { Link, useLocation } from "react-router-dom";
import { IBreadcrumb } from "../../types/BreadCrumb.interface";

type Props = {
  breadcrumbs: IBreadcrumb[];
};

export default function Breadcrumb({ breadcrumbs }: Props) {
  const location = useLocation();
  return (
    <div className="bg-transparent">
      <ul className=" flex  p-2 gap-6 text-sm text-white items-center">
        {breadcrumbs.map((breadcrumb) => (
          <>
            <Link
              to={breadcrumb.link}
              className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-[#b572d6] p-4 rounded-md ${
                location.pathname === breadcrumb.link &&
                "bg-[#b572d6] text-white"
              }`}
              key={breadcrumb.link}
            >
              {breadcrumb.name}
            </Link>
            {breadcrumbs[0].link !== breadcrumb.link ? "" : "/"}
          </>
        ))}
      </ul>
    </div>
  );
}
