import EnglishBlogCard from "@/components/layout/blog/EnglishBlogCard";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
const EnglishBlogPage = () => {
  return (
    <>
      <div className="">
        <span className="flex gap-4 py-8 items-center ">
          {/* <Avatar>
            <AvatarImage className="w-26" src="https://github.com/shadcn.png" />
          </Avatar> */}
          <img
            className="rounded-full size-16"
            src="https://github.com/shadcn.png"
            alt=""
          />
          <div className="">
            <h2 className="text-lg font-bold">English Articles</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ad obcaecati eos sed fugit aut. a architecto?
            </p>
          </div>
        </span>
        <Separator className="my-4" />

        {/* Filter section */}
        <section className="flex justify-between py-8 ">
          <h2 className="text-lg font-bold">Recent blog posts</h2>
          <div className="flex gap-4">
            <span className="">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </span>
            <span className=""></span>
          </div>
        </section>

        {/* Blog Card Section */}

        <EnglishBlogCard />
      </div>
    </>
  );
};

export default EnglishBlogPage;
