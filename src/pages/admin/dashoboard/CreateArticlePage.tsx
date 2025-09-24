import { Icons } from "@/components/icons";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";
import CreateArticleForm from "@/components/layout/dashboard/CreateArticleForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const CreateArticlePage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4 space-y-4">
              <Link to={"/dashboard/articles"}>
                <Button variant={"outline"}>
                  <Icons.arrowLeft />
                  Back
                </Button>
              </Link>
              <h1 className="mt-4">
                <Icons.article className="text-teal-500 inline me-2 size-6" />
                Create a New Article
              </h1>
              <div>
                <CreateArticleForm />
              </div>
            </section>
          </div>
        </SidebarInset>
      </div>
    </>
  );
};

export default CreateArticlePage;
