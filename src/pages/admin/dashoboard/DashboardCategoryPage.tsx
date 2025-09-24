import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";
import { Icons } from "@/components/icons";
import { Link } from "react-router";
import CategoryListTable from "@/components/layout/dashboard/CategoryListTable";

const DashboardCategoryPage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4 space-y-4">
              <h1>
                <Icons.category className="text-teal-500 inline me-2 size-6" />
                Category Lists
              </h1>
              <div>
                <Link to={"/dashboard/createCategory"}>
                  <Button variant={"outline"}>Create New Category</Button>
                </Link>
              </div>
              <CategoryListTable />
            </section>
          </div>
        </SidebarInset>
      </div>
    </>
  );
};

export default DashboardCategoryPage;
