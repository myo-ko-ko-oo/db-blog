import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "../AdminHeader";

const SettingManagePage = () => {
  return (
    <>
      <div>
        <SidebarInset>
          <AdminHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-slate-800 h-screen">
            <section className="mt-4">
              <h1>SettingManagePage</h1>
              <Button variant={"outline"}>hello</Button>
            </section>
          </div>
        </SidebarInset>
      </div>
    </>
  );
};

export default SettingManagePage;
