import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { engPosts } from "@/data/englishPosts";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}
const BlogCarousel = () => {
  return (
    <>
      <div className="px-10">
        <h2 className="text-lg font-bold py-8">You May Also Like</h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="gap-4 pb-8">
            {engPosts.map((post, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3  h-24">
                <Link to={`/blog/detail/${post.type}/${post.id}`}>
                  <section className="grid grid-cols-3 rounded-md gap-2.5 p-2  dark:bg-slate-800">
                    <img
                      src={post.image}
                      alt="blog post"
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-md h-24"
                      alt=""
                    />

                    <div className="col-span-2">
                      <p className="line-clamp-1 text-sm font-bold">
                        {post.title}
                      </p>
                      <div
                        className="prose max-w-none line-clamp-3 text-xs my-4"
                        dangerouslySetInnerHTML={{ __html: post.body }}
                      />
                    </div>
                  </section>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default BlogCarousel;
