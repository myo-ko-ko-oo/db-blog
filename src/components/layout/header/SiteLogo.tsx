import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Link } from "react-router";
import MobileNavbar from "./MobileNavbar";
const SiteLogo = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <MobileNavbar />
          <span>
            <Icons.logo className="size-8 text-teal-600" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold">{siteConfig.name}</span>
        </div>
      </Link>
    </>
  );
};

export default SiteLogo;
