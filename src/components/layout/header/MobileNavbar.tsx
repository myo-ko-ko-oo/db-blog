import { Icons } from "@/components/icons";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Link } from "react-router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const MobileNavbar = () => {
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger>
            <Icons.openMenu className="size-5 mt-2 lg:hidden text-gray-500 dark:text-gray-200" />
          </SheetTrigger>
          <SheetTitle className="sr-only">Main Navigation</SheetTitle>
          <SheetDescription className="sr-only">Medical Blog</SheetDescription>
          <SheetContent side="left" className=" px-2 w-2/3">
            <SheetClose asChild>
              <SheetHeader>
                <Link to="/" className="flex items-center">
                  <Icons.logo
                    className="mr-2 size-8 text-teal-600"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-lg">{siteConfig.name}</span>
                  <span className="sr-only">Home</span>
                </Link>
              </SheetHeader>
            </SheetClose>

            <ScrollArea className=" h-[calc(100vh-8rem)] ">
              <SidebarProvider>
                <SidebarGroup>
                  <SidebarGroupLabel>Medical Blog</SidebarGroupLabel>
                  <SidebarMenu className="space-y-2 ">
                    <SheetClose asChild>
                      <Link to={"/"}>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="dark:hover:bg-slate-700">
                            <Icons.home className="size-6" />
                            Home
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </Link>
                    </SheetClose>

                    <Collapsible className="group/collapsible ">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            className="dark:hover:bg-slate-700 w-full"
                            tooltip="sestting"
                          >
                            <Icons.article className="size-4" />
                            Blog
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SheetClose asChild>
                          <SidebarMenuSubButton asChild>
                            <Link to={"/blog/english"}>
                              <SidebarMenuSub>
                                <span>
                                  <Icons.EnglishFlag className="w-4 h-3 inline me-2" />
                                  English Articles
                                </span>
                              </SidebarMenuSub>
                            </Link>
                          </SidebarMenuSubButton>
                        </SheetClose>

                        <SheetClose asChild>
                          <SidebarMenuSubButton asChild>
                            <Link to={"/blog/burmese"}>
                              <SidebarMenuSub>
                                <span>
                                  <Icons.BurmeseFlag className="w-4 inline me-2" />
                                  Burmese Articles
                                </span>
                              </SidebarMenuSub>
                            </Link>
                          </SidebarMenuSubButton>
                        </SheetClose>

                        <SheetClose asChild>
                          <SidebarMenuSubButton asChild>
                            <Link to={"/blog/video"}>
                              <SidebarMenuSub>
                                <span>
                                  <Icons.Video className="size-4 inline me-2" />
                                  videos
                                </span>
                              </SidebarMenuSub>
                            </Link>
                          </SidebarMenuSubButton>
                        </SheetClose>
                      </CollapsibleContent>
                    </Collapsible>

                    <SheetClose asChild>
                      <Link to={"about"}>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="dark:hover:bg-slate-700">
                            <Icons.category className="size-4" />
                            About Us
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to={"contact"}>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="dark:hover:bg-slate-700">
                            <Icons.article className="size-4" />
                            Contact
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </Link>
                    </SheetClose>

                    {/* Blog Collap */}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarProvider>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNavbar;
