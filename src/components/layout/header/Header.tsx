import HeaderIcons from "./HeaderIcons";
import MainNavbar from "./MainNavbar";

import SiteLogo from "./SiteLogo";

const Header = () => {
  return (
    <>
      <header className="w-full top-0 fixed backdrop-blur-md border-0 place-content-center shadow border-b h-16 px-4 lg:px-8">
        <nav className="flex justify-between">
          <SiteLogo />
          <MainNavbar />
          <HeaderIcons />
        </nav>
      </header>
    </>
  );
};

export default Header;
