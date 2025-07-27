import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
const EnglishBlogCard = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 px-2 lg:px-0">
        <Link to={"#"}>
          <Card className="py-0 px-3 border-none shadow-none">
            <img
              src="https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/diabetes-and-glucose-metabolism/diabetes_treatments_pe_1796x9432.jpg"
              className="w-full rounded-xl object-cover h-[220px]"
              decoding="async"
              loading="lazy"
              alt="blog-image"
            />
            <h2 className="line-clamp-1 font-semibold text-xl">
              This is Title
            </h2>
            <p className="line-clamp-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic
              amet eveniet est recus, neque eligendi obcaecati autem illo. Non
              adipisicing elit. At hic.
            </p>
            <span className="flex gap-2.5 pb-4 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <small>Myo Ko</small>
              <small>| 05 Feb 2025</small>
            </span>
          </Card>
        </Link>
        <Link to={"#"}>
          <Card className="p-0 px-3 border-none shadow-none">
            <img
              src="https://metrohospitals.com/wp-content/uploads/2024/01/Dont-Let-Diabetes-Control-You.jpg"
              className="w-full rounded-xl object-cover h-[220px]"
              decoding="async"
              loading="lazy"
              alt="blog-image"
            />
            <h2 className="line-clamp-1 font-semibold text-xl">
              This is Title
            </h2>
            <p className="line-clamp-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic
              amet eveniet est recus, neque eligendi obcaecati autem illo. Non
              adipisicing elit. At hic.
            </p>
            <span className="flex gap-2.5 pb-4">
              <small>Myo Ko</small>
              <small>| 05 Feb 2025</small>
            </span>
          </Card>
        </Link>
        <Link to={"#"}>
          <Card className="p-0 px-3 border-none shadow-none">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppnuVNl3NlPy2OSnsLr6gmK9dlqlTDCqMrQ&s"
              className="w-full rounded-xl object-cover h-[220px]"
              decoding="async"
              loading="lazy"
              alt="blog-image"
            />
            <h2 className="line-clamp-1 font-semibold text-xl">
              This is Title
            </h2>
            <p className="line-clamp-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic
              amet eveniet est recus, neque eligendi obcaecati autem illo. Non
              adipisicing elit. At hic.
            </p>
            <span className="flex gap-2.5 pb-4">
              <small>Myo Ko</small>
              <small>| 05 Feb 2025</small>
            </span>
          </Card>
        </Link>
        <Link to={"#"}>
          <Card className="p-0 px-3 border-none shadow-none">
            <img
              src="https://metrohospitals.com/wp-content/uploads/2024/01/Dont-Let-Diabetes-Control-You.jpg"
              className="w-full rounded-xl object-cover h-[220px]"
              decoding="async"
              loading="lazy"
              alt="blog-image"
            />
            <h2 className="line-clamp-1 font-semibold text-xl">
              This is Title
            </h2>
            <p className="line-clamp-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic
              amet eveniet est recus, neque eligendi obcaecati autem illo. Non
              adipisicing elit. At hic.
            </p>
            <span className="flex gap-2.5 pb-4">
              <small>Myo Ko</small>
              <small>| 05 Feb 2025</small>
            </span>
          </Card>
        </Link>
      </section>
    </>
  );
};

export default EnglishBlogCard;
