import { Icons } from "@/components/icons";
import { Link } from "react-router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
const MobileNavbar = () => {
  return (
    <>
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <Icons.openMenu className="size-6 text-gray-600 dark:text-gray-200" />
          </SheetTrigger>
          <SheetContent side="left" className="pt-9 px-6">
            <SheetClose asChild>
              <Link to="/" className="flex items-center">
                <Icons.logo
                  className="mr-2 size-8 text-teal-600"
                  aria-hidden="true"
                />
                <span className="font-bold text-lg">{siteConfig.name}</span>
                <span className="sr-only">Home</span>
              </Link>
            </SheetClose>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
              <div className="mt-4 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link to={"/"} className="text-base">
                    Home
                  </Link>
                </SheetClose>
              </div>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base">
                    Blogs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-2">
                      <SheetClose asChild>
                        <Link
                          to={"/blog/english"}
                          className="text-foreground/70"
                        >
                          English Articles
                        </Link>
                      </SheetClose>
                    </div>
                  </AccordionContent>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-2">
                      <SheetClose asChild>
                        <Link
                          to={"/blog/burmese"}
                          className="text-foreground/70"
                        >
                          Burmese Articles
                        </Link>
                      </SheetClose>
                    </div>
                  </AccordionContent>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-2">
                      <SheetClose asChild>
                        <Link to={"/blog/video"} className="text-foreground/70">
                          videos
                        </Link>
                      </SheetClose>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-3 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link to={"about"} className="text-base">
                    About us
                  </Link>
                </SheetClose>
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link to={"contact"} className="text-base">
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNavbar;
