import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useLocation } from "react-router";

const AdminHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <header className="dark:bg-slate-900 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="" />

              <BreadcrumbItem
                className={`${path.endsWith("/dashboard") ? "hidden " : ""}`}
              >
                <BreadcrumbPage>
                  {path.startsWith("/dashboard/categories")
                    ? "Categories"
                    : path.startsWith("/dashboard/articles")
                    ? "Articles"
                    : path.startsWith("/dashboard/manage")
                    ? "Site Manage"
                    : path.startsWith("/dashboard/users")
                    ? "Users"
                    : ""}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator
                className={`${
                  path.endsWith("/dashboard")
                    ? "hidden "
                    : path.startsWith("/dashboard/deposite")
                    ? "block"
                    : ""
                }`}
              />
              {/* <BreadcrumbItem>
                <BreadcrumbPage>Data </BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
