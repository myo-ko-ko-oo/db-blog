import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";
import { Icons } from "@/components/icons";
import CategoryListTable from "@/components/layout/dashboard/CategoryListTable";
import { Link } from "react-router";

const SettingUserPage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4 space-y-4">
              <h1>
                <Icons.user className="text-teal-500 inline me-2 size-5" />
                User Manage
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

export default SettingUserPage;
