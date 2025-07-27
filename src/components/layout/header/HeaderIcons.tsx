import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderIcons = () => {
  return (
    <>
      <div className="flex gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Icons.dashboard className="size-5 text-teal-600" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Icons.heartFill className="size-5 text-teal-600" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Icons.gear className="size-5 text-teal-600" />
              setting
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.exit className="size-5 text-teal-600" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default HeaderIcons;
