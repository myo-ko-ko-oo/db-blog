import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Icons } from "./icons";
import { Link } from "react-router";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Mediccal Blog</SidebarGroupLabel>
      <SidebarMenu className="space-y-2 ">
        <Link to={"/dashboard"}>
          <SidebarMenuItem>
            <SidebarMenuButton className="dark:hover:bg-slate-700">
              <Icons.dashboard className="size-6" />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
        <Link to={"/dashboard/categories"}>
          <SidebarMenuItem>
            <SidebarMenuButton className="dark:hover:bg-slate-700">
              <Icons.category className="size-4" />
              Categories
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
        <Link to={"/dashboard/articles"}>
          <SidebarMenuItem>
            <SidebarMenuButton className="dark:hover:bg-slate-700">
              <Icons.article className="size-4" />
              Articles
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>

        {/* Setting Collap */}
        <Collapsible className="group/collapsible ">
          <CollapsibleTrigger asChild>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="dark:hover:bg-slate-700 w-full"
                tooltip="sestting"
              >
                <Icons.gear className="size-4" />
                Setting
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Link to={"/dashboard/manage"}>
              <SidebarMenuSub>
                <SidebarMenuSubButton className="dark:hover:bg-slate-700">
                  <Icons.layers className="size-4" />
                  Site Manage
                </SidebarMenuSubButton>
              </SidebarMenuSub>
            </Link>
            <Link to={"/dashboard/users"}>
              <SidebarMenuSub>
                <SidebarMenuSubButton className="dark:hover:bg-slate-700">
                  <Icons.user className="size-4" />
                  Users
                </SidebarMenuSubButton>
              </SidebarMenuSub>
            </Link>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
