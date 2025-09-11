import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import DoctorImage from "../../data/images/doctorImage.png";
import { Icons } from "@/components/icons";
import { Link } from "react-router";
import BlogCarousel from "@/components/layout/home/BlogCarousel";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section className=" space-y-6 place-content-center text-center lg:text-start px-2 lg:px-0 my-6 lg:my-0">
          <Button variant={"outline"}>Welcome to diabetes blog</Button>
          <h1 className="text-4xl font-extrabold">
            Medical Knowledge and Everything You Need to Know
          </h1>
          <p>{siteConfig.description}</p>
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <Button className="bg-teal-700 dark:text-white">
              Explore Blog
            </Button>
            <p>
              Watch the videos <Icons.Video className="size-6  inline" />
            </p>
          </div>
        </section>
        <section className=" flex justify-center">
          <img
            className="w-full  lg:w-2/3 object-fill"
            src={DoctorImage}
            alt=""
          />
        </section>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 lg:bg-slate-100  rounded-xl lg:p-8 space-y-4 lg:space-y-0 dark:bg-slate-900 dark:lg:bg-slate-800 dark:text-white">
        <Link to={"blog/english"} className="rounded-lg">
          <div className="bg-slate-100 p-6  rounded-lg lg:rounded-none flex gap-4 items-center  lg:border-r-2 border-gray-400 dark:bg-slate-800 ">
            <Icons.EnglishFlag className="w-14 h-12 object-cover rounded-xl bg-slate-200 text-teal-800 border shadow p-2" />
            <span>
              <p className="font-semibold">English Articels</p>
              <small>this is eng articels ffdsf fdsf</small>
            </span>
          </div>
        </Link>
        <Link to={"blog/burmese"} className="">
          <div className="bg-slate-100 flex gap-4 items-center p-6 rounded-lg lg:rounded-none lg:border-r-2 border-gray-400 dark:bg-slate-800 ">
            <Icons.BurmeseFlag className="w-14 h-12 rounded-xl bg-slate-200 text-teal-800 border shadow p-2" />
            <span>
              <p className="font-semibold">Burmese Articels</p>
              <small>this is eng articels ffdsf fdsf</small>
            </span>
          </div>
        </Link>
        <Link to={"blog/video"} className="">
          <div className="bg-slate-100 flex gap-4 items-center p-6 rounded-lg lg:rounded-none dark:bg-slate-800 ">
            <Icons.Video className="w-14 h-12  rounded-md bg-slate-200 text-red-600 border shadow p-2" />
            <span>
              <p className="font-semibold">Video Contents</p>
              <small>this is eng articels ffdsf fdsf</small>
            </span>
          </div>
        </Link>
      </div>
      <BlogCarousel />
    </>
  );
};

export default HomePage;
