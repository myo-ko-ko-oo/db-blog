"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

export function TeamSwitcher({
  site,
}: {
  site: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const siteData = site[0];

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link to={"/"}>
          <SidebarMenuButton
            size="lg"
            className="dark:hover:bg-slate-800 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
          >
            <div className="bg-teal-500 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <siteData.logo className="size-4 " />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{siteData.name}</span>
              <span className="truncate text-xs">{siteData.plan}</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
