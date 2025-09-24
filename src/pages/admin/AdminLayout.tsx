import { AppSidebar } from "@/components/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-white w-full dark:bg-slate-800">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
