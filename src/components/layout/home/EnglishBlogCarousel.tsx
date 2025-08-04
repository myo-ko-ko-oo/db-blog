import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
const EnglishBlogCarousel = () => {
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-red-400 h-40 ">
              1
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-purple-400 h-40">
              2
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-indigo-400">
              3
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-lime-400">
              4
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default EnglishBlogCarousel;
