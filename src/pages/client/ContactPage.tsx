import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT: Contact Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-6">
              Have any questions or feedback? We'd love to hear from you.
            </p>

            <Card className="mb-4">
              <CardContent className="p-6 flex justify-between">
                <div className="">
                  <h2 className="font-semibold text-xl mb-2">Email</h2>
                  <a
                    href="mailto:info@diabetesknowledge.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    info@diabetesknowledge.com
                  </a>
                </div>
                <Icons.sentEmail className="size-10 mr-8 text-teal-600" />
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="p-6 flex justify-between">
                <div className="">
                  <h2 className="font-semibold text-xl mb-2">Phone</h2>
                  <a
                    href="tel:+959123456789"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +95 9 123 456 789
                  </a>
                </div>
                <Icons.phone className="size-10 mr-8 text-teal-600" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex justify-between">
                <div className="">
                  <h2 className="font-semibold text-xl mb-2">Address</h2>
                  <p>123 Health Street, Yangon, Myanmar</p>
                </div>
                <Icons.address className="size-10 mr-8 text-teal-600" />
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Contact Form */}
          <Card className="">
            <div className="flex justify-center ">
              <Icons.contact className="size-12 mr-8 " />
            </div>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <Input placeholder="Your name" required />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <Textarea
                    placeholder="Write your message..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
