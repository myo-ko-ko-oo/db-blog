import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  useActionData,
  useNavigation,
  //  useSubmit
} from "react-router";
import { Icons } from "@/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const nameSchema = z.object({
  name: z
    .string({ message: "Invalid Category Name !" })
    .nonempty({ message: "Category Name Field is Required!" }),
  language: z.enum(["ENG", "MM"]),
});
const CreateCategoryForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };

  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
      language: "ENG",
    },
  });
  // const submit = useSubmit();
  const handelRegister = (value: z.infer<typeof nameSchema>) => {
    console.log(value.language);
    // submit(value, { method: "post", action: "." });
  };
  return (
    <>
      <div className="flex flex-col gap-6 lg:w-2/3 ">
        <Card className="backdrop-blur-sm bg-transparent border-gray-500">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handelRegister)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Category Name{" "}
                        <span className="text-red-600 text-xl">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="text-white"
                          placeholder="Enter Category Name ..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {actionData?.message && (
                  <p className="text-xs text-red-400">{actionData.message}</p>
                )}

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-white">
                        Category language
                        <span className="text-red-600 text-xl">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value} // 👈 bind current value
                          className="flex flex-col gap-3"
                        >
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="ENG" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              English Category
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="MM" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Burmese Category
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isSubmitting ? (
                  <>
                    <Button disabled variant={"outline"} className="w-full">
                      <Icons.gear className="animate-spin" /> Submitting...
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      type="submit"
                      variant={"outline"}
                      className="w-full"
                    >
                      submit
                    </Button>
                  </>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CreateCategoryForm;
