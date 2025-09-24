import * as React from "react";
// import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Icons } from "./icons";

// This is sample data.
const data = {
  user: {
    name: "Dr.Kyaw Kyaw",
    email: "dr.Kyaw@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  site: [
    {
      name: "Diabetes Blog",
      logo: Icons.logo,
      plan: "Author",
    },
  ],
  // navMain: [
  //   {
  //     title: "Dashboard",
  //     url: "#",
  //     icon: SquareTerminal,
  //     isActive: true,
  //   },
  //   {
  //     title: "Deposite Request",
  //     url: "#",
  //     icon: Bot,
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="dark:bg-slate-900" collapsible="icon" {...props}>
      <SidebarHeader className="dark:bg-slate-900 ">
        <TeamSwitcher site={data.site} />
      </SidebarHeader>
      <SidebarContent className="dark:bg-slate-800">
        <NavMain />
      </SidebarContent>
      <SidebarFooter className="dark:bg-slate-900">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
