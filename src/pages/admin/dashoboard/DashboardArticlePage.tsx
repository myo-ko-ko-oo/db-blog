import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";
import { Icons } from "@/components/icons";
import { Link } from "react-router";
import ArticleListTable from "@/components/layout/dashboard/ArticleListTable";

const DashboardArticlePage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4 space-y-4">
              <h1>
                <Icons.article className="text-teal-500 inline me-2 size-6" />
                Article Lists
              </h1>
              <div>
                <Link to={"/dashboard/createArticle"}>
                  {" "}
                  <Button variant={"outline"}>Create New Article</Button>
                </Link>
              </div>
              <ArticleListTable />
            </section>
          </div>
        </SidebarInset>
      </div>
    </>
  );
};

export default DashboardArticlePage;
