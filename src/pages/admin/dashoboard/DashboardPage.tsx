import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const DashboardPage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4">
              <h1>
                <Icons.dashboard className="inline me-2 size-5 text-teal-500" />
                Dashboard
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-4">
                <Card className="dark:bg-slate-700 px-2">Total Posts- 20</Card>
                <Card className="dark:bg-slate-700 px-2">Total Users -5</Card>
                <Card className="dark:bg-slate-700 px-2"></Card>
                <Card className="dark:bg-slate-700 px-2"></Card>
              </div>
            </section>
          </div>
        </SidebarInset>
      </div>
    </>
  );
};

export default DashboardPage;
