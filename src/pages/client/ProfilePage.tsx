import MaleAvatar from "../../assets/male-avatar.jpg";
import sample from "../../assets/About-Image.jpg";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
const ProfilePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-3 md:px-0">
        <span></span>
        <section className="text-gray-700 dark:text-gray-300">
          <div className="realative">
            <img
              src={sample}
              className="rounded-md w-full h-36"
              alt="profile-image"
            />

            <img
              src={MaleAvatar}
              className="rounded-full size-24 z-20 absolute top-42 ml-3 ring-2 ring-white "
              alt="profile-image"
            />
          </div>
          <div className="mt-18 space-y-2">
            <h2 className="text-2xl font-bold">jhon Denver</h2>
            <p className="text-sm ">jhon@gamil.com</p>
          </div>
          <Button className="mt-4">
            <Icons.user className="inline" />
            Edit Profile
          </Button>
          <Separator className="my-4" />
          <div className=" space-y-2">
            <h2 className="text-md font-bold">Profile Detail!</h2>
            <p className="text-sm ">
              <Icons.star className="inline" /> Role - ADMIN
            </p>
            <p className="text-sm ">
              {" "}
              <Icons.phone className="inline me-1" />
              Phone - 0978399025
            </p>
            <p className="text-sm ">
              {" "}
              <Icons.exclamation className="inline me-1" />
              Joined - 20-sep-2025
            </p>
            <p className="text-sm ">
              {" "}
              <Icons.article className="inline me-1" />
              Created Article - 20 posts
            </p>
          </div>
        </section>
        <span></span>
      </div>
    </>
  );
};

export default ProfilePage;
