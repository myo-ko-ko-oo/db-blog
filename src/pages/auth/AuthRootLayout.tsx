import { Outlet } from "react-router";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";

const AuthRootLayout = () => {
  return (
    <>
      <div className="dark:bg-slate-900 overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};
export default AuthRootLayout;
