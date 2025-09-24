import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import { Link } from "react-router";
import AdminHeader from "../AdminHeader";
import CreateCategoryForm from "@/components/layout/dashboard/CreateCategoryForm";

const CreateCategoryPage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4 space-y-4">
              <Link to={"/dashboard/categories"}>
                <Button variant={"outline"}>
                  <Icons.arrowLeft />
                  Back
                </Button>
              </Link>
              <h1 className="mt-4">
                <Icons.category className="text-teal-500 inline me-2 size-6" />
                Create a New Category
              </h1>
              <div>
                <CreateCategoryForm />
              </div>
            </section>
          </div>
        </SidebarInset>
      </div>
      <div></div>
    </>
  );
};

export default CreateCategoryPage;
