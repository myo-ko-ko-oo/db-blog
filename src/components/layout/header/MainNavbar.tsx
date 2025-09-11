import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MainNavbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  (navigationMenuTriggerStyle(), "dark:bg-slate-700")
                }`}
              >
                <Link to={"/"}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-slate-700">
                Blogs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to={"blog/english"}>
                        <div className="font-medium">English Articles</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to={"blog/burmese"}>
                        <div className="font-medium">Burmese Articles</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to={"blog/video"}>
                        <div className="font-medium">Video</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  (navigationMenuTriggerStyle(), "dark:bg-slate-700")
                }`}
              >
                <Link to={"/about"}>About us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  (navigationMenuTriggerStyle(), "dark:bg-slate-700")
                }`}
              >
                <Link to={"/contact"}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default MainNavbar;
