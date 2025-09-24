import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useProfileStore from "@/store/ProfileStore";
import { Link } from "react-router";

const HeaderIcons = () => {
  const { role } = useProfileStore();
  return (
    <>
      <div className="flex gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Icons.user className=" mx-2 text-teal-600 dark:text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {role && role === "USER" ? (
              <></>
            ) : (
              <>
                <Link to={"/dashboard"}>
                  <DropdownMenuItem>
                    <Icons.dashboard className="size-5 " />
                    Dashboard
                  </DropdownMenuItem>
                </Link>
              </>
            )}
            <Link to={"/profile"}>
              <DropdownMenuItem>
                <Icons.heartFill className="size-5 " />
                Profile
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <Icons.gear className="size-5 0" />
              setting
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.exit className="size-5 " />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default HeaderIcons;
