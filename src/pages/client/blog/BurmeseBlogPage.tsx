import { Icons } from "@/components/icons";
import { mmPosts } from "@/data/burmesePost";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import BurmeseBlogCard from "@/components/layout/blog/BurmeseBlogCard";
const BurmeseBlogPage = () => {
  return (
    <>
      <div className="">
        <span className="flex gap-4 py-8 items-center ">
          <Icons.BurmeseFlag className="rounded-xl object-fill w-16 h-12" />
          <div className="">
            <h2 className="text-lg font-bold">Burmese Articles</h2>
            <Separator className="my-2" />
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

        <BurmeseBlogCard mmPosts={mmPosts} />
      </div>
    </>
  );
};

export default BurmeseBlogPage;
