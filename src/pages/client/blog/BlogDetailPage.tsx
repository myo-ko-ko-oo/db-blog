import { Link, useParams } from "react-router";
import { engPosts } from "@/data/englishPosts";
import { mmPosts } from "@/data/burmesePost";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const BlogDetailPage = () => {
  const { type, id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let detailPost;
  if (type === "eng") {
    detailPost = engPosts.find((post) => post.id === Number(id));
  } else if (type === "mm") {
    detailPost = mmPosts.find((post) => post.id === Number(id));
  }

  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <section className="flex flex-col lg:flex-row">
          <section className="w-full lg:w-3/4 lg:pr-16">
            <Button variant="outline" asChild className="mb-6 mt-6">
              <Link
                to={`${type === "eng" ? "/blog/english" : "/blog/burmese"}`}
              >
                <Icons.arrowLeft />
                All Posts
              </Link>
            </Button>
            {detailPost ? (
              <>
                <h2 className="mb-3 text-3xl font-extrabold leading-relaxed">
                  {detailPost.title}
                </h2>
                <div className="text-sm mb-2">
                  <span>
                    by
                    <span className="font-[600]"> {detailPost.author} </span>
                    on
                    <span className="font-[600]"> {detailPost.updated_at}</span>
                  </span>
                </div>
                {/* <h3 className="my-6 text-base font-[400]">{detailPost.body}</h3> */}
                <img
                  src={detailPost.image}
                  alt={detailPost.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl"
                />
                <div
                  className="prose max-w-none leading-relaxed my-6"
                  dangerouslySetInnerHTML={{ __html: detailPost.body }}
                />
                <div className="mb-12 space-x-2">
                  {/* {detailPost.post.cate.map((tag: Tag) => (
                    <Button variant="secondary">{tag.name}</Button>
                  ))} */}
                </div>
              </>
            ) : (
              <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground lg:mt-24">
                No post found
              </p>
            )}
          </section>
          <section className="w-full lg:mt-24 lg:w-1/4">
            <div className="mb-8 flex items-center gap-2 text-base font-semibold">
              <Icons.layers />
              <h3 className="">Other Blog Posts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {engPosts.map((post) => (
                <>
                  <Link
                    to={`/blog/detail/${post.type}/${post.id}`}
                    className="mb-6 flex items-start gap-2"
                    key={post.id}
                  >
                    <img
                      src={post.image}
                      alt="blog post"
                      loading="lazy"
                      decoding="async"
                      className="w-1/4 rounded"
                    />
                    <div className="w-3/4 text-sm font-[500] text-muted-foreground">
                      <p className="line-clamp-1">{post.title}</p>
                      <i>... see more</i>
                    </div>
                  </Link>
                  <Separator className="my-1" />
                </>
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default BlogDetailPage;
