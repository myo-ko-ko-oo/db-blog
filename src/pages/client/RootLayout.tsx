import FooterSection from "@/components/layout/footer/FooterSection";
import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";

const RootLayout = () => {
  return (
    <>
      <div className="dark:bg-slate-900 overflow-hidden">
        <Header />
        <div className="container mx-auto mt-16 md:mt-20  px-2 lg:px-0 min-h-screen">
          <Outlet />
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default RootLayout;
