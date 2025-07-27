import FooterSection from "@/components/layout/footer/FooterSection";
import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto px-2 lg:px-0 min-h-screen">
          <Outlet />
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default RootLayout;
