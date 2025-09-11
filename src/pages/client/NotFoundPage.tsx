import { Link } from "react-router";
import NotFoundImage from "../../assets/page-not-found_6wni.svg";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
const NotFoundPage = () => {
  return (
    <>
      <div className="w-full px-5 mt-24">
        <img
          src={NotFoundImage}
          loading="lazy"
          decoding="async"
          className="w-full  h-50"
          alt="not_found_page"
        />
        <h2 className="text-center text-xl font-bold mt-6 mb-2">
          Sorry , the Page is Not Found
        </h2>
        <p className="text-center text-sm">Go Back to Home Page!</p>
        <div className="mt-6  flex justify-center">
          <Link to={"/"}>
            <Button className="bg-teal-600">
              <Icons.home />
              Home Page
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
