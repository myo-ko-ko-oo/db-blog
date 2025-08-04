import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import type { mmPost } from "@/types";
import { mmPosts } from "@/data/burmesePost";

type BurmeseBlogCardProps = {
  mmPosts: mmPost[];
};

const BurmeseBlogCard = ({ engPosts }: BurmeseBlogCardProps) => {
  return (
    <>
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 px-2 lg:px-0">
        {mmPosts.length > 0 ? (
          mmPosts.map((post) => (
            <Link to={`/blog/detail/${post.type}/${post.id}`} key={post.id}>
              <Card className="py-0 px-3 border-none shadow-none hover:shadow-md transition-all duration-200">
                <img
                  src={post.image}
                  className="w-full rounded-xl object-cover h-[220px]"
                  decoding="async"
                  loading="lazy"
                  alt="blog-image"
                />
                <h2 className="line-clamp-1 font-semibold text-xl mt-2">
                  {post.title}
                </h2>
                <div
                  className="prose max-w-none my-4 line-clamp-4"
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
    </>
  );
};

export default BurmeseBlogCard;
