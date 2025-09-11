import { Card, CardContent } from "@/components/ui/card";
import AboutImage from "../../assets/About-Image.jpg";

const AboutPage = () => {
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Team Image */}
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <img
                src={AboutImage}
                loading="lazy"
                decoding="async"
                alt="Our Doctors and Authors Team"
                className="w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* RIGHT: About Description */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to our{" "}
              <span className="font-semibold">Diabetes Knowledge Hub</span>. Our
              dedicated team of experienced doctors and talented authors is
              passionate about creating accurate, easy-to-understand content on
              diabetes care, prevention, and lifestyle.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We believe that empowering people with the right knowledge can
              help them manage their health better. Every article and post is
              carefully reviewed by medical professionals to ensure reliability
              and clarity.
            </p>
            <p className="text-lg leading-relaxed">
              Thank you for trusting us on your journey to better health. 💙
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
