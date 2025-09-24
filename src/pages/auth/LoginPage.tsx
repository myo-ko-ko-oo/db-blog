import { LoginForm } from "@/components/layout/auth/LoginForm";
// import { GalleryVerticalEnd } from "lucide-react";
import LoginCoverImage from "../../assets/Login_portal.png";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-muted relative hidden lg:block">
          <img
            src={LoginCoverImage}
            alt="login_cover_image"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] "
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="flex  gap-2 justify-start">
            <span>
              <Link to={"/"}>
                <Button variant={"outline"}>
                  {" "}
                  <Icons.home />
                  Home
                </Button>
              </Link>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
