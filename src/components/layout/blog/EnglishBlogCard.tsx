import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import type { engPost } from "@/types";

type EnglishBlogCardProps = {
  engPosts: engPost[];
};

const EnglishBlogCard = ({ engPosts }: EnglishBlogCardProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 px-2 lg:px-0">
      {engPosts.length > 0 ? (
        engPosts.map((post) => (
          <Link to={`/blog/detail/${post.type}/${post.id}`} key={post.id}>
            <Card className="py-0 dark:bg-slate-800  border-none shadow-none hover:shadow-md transition-all duration-200">
              <img
                src={post.image}
                className="w-full rounded-xl object-cover h-[220px]"
                decoding="async"
                loading="lazy"
                alt="blog-image"
              />
              <h2 className="line-clamp-1 font-semibold text-xl mt-2 px-3">
                {post.title}
              </h2>
              <div
                className="prose max-w-none my-4 line-clamp-4 px-3"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <span className="flex gap-2.5 pb-4 items-center">
                <Avatar>
                  <AvatarImage src="https://png.pngtree.com/png-clipart/20240323/original/pngtree-avatar-with-flat-style-png-image_14658819.png" />
                </Avatar>
                <small>{post.author}</small>
                <small>| {post.updated_at}</small>
              </span>
            </Card>
          </Link>
        ))
      ) : (
        <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground lg:mt-24">
          No posts found.
        </p>
      )}
    </section>
  );
};

export default EnglishBlogCard;

{
  /* <Link to={"#"}>
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
            <span className="flex gap-2.5 pb-4 items-center">
              <Avatar>
                <AvatarImage src="https://thumbs.dreamstime.com/b/d-icon-stylish-smiling-woman-glasses-phone-avatar-cartoon-hipster-character-people-close-up-portrait-isolated-344073018.jpg" />
              </Avatar>
              <small>Khaing Pyae</small>
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
            <span className="flex gap-2.5 pb-4 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <small>Joe Joe</small>
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
            <span className="flex gap-2.5 pb-4 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <small>Myo Ko</small>
              <small>| 05 Feb 2025</small>
            </span>
          </Card>
        </Link> */
}
