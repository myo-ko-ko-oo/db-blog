import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SimpleEditor from "@/components/SimpleEditor";
import usePostStore from "@/store/PostStore";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useActionData, useNavigation, useSubmit } from "react-router";
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

const titleSchema = z.object({
  title: z
    .string({ message: "Invalid Title !" })
    .nonempty({ message: "Title Field is Required!" }),
});

type Category = { id: number; name: string };

const categories: Category[] = [
  { id: 1, name: "Health" },
  { id: 2, name: "Lifestyle" },
  { id: 3, name: "Diabetes" },
  { id: 4, name: "Nutrition" },
];

const CreateArticleForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };
  const [clientError, setClientError] = useState<string | null>(null);
  console.log(clientError);

  const {
    // title,
    // setTitle,
    sections,
    addSection,
    updateSection,
    removeSection,
    categories: storeCategories,
    setCategories,
    // tags,
    setTags,
    // reset,
  } = usePostStore();

  const form = useForm<z.infer<typeof titleSchema>>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      title: "",
    },
  });

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    storeCategories
      .map((c) => categories.find((cat) => cat.id === c.id))
      .filter((c): c is Category => !!c)
  );
  console.log("cat", selectedCategories.length);
  const toggleCategory = (category: Category) => {
    let updated: Category[];
    if (selectedCategories.find((c) => c.id === category.id)) {
      updated = selectedCategories.filter((c) => c.id !== category.id);
    } else {
      updated = [...selectedCategories, category];
    }
    setSelectedCategories(updated);
    setCategories(updated.map((c) => ({ id: c.id })));
  };
  const submit = useSubmit();
  const handelRegister = (value: z.infer<typeof titleSchema>) => {
    if (selectedCategories.length <= 0) {
      setClientError("At least one category is required!");
      return;
    }

    setClientError(null);
    // submit(value, { method: "post", action: "." });
  };

  return (
    <section className="space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handelRegister)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel className="text-white">
                  Title <span className="text-red-600 text-xl">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="text-white"
                    placeholder="Post title ..."
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

          {/* Categories */}
          <div className="">
            <Label className="mb-2">Select Categories</Label>
            <div className="md:w-2/3 px-2 py-4 gap-2.5 rounded-md border shadow-sm grid grid-cols-4 md:grid-cols-6">
              {categories.map((cat) => {
                const isSelected = selectedCategories.find(
                  (c) => c.id === cat.id
                );
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-1 dark:bg-slate-700 text-sm rounded-md border ${
                      isSelected
                        ? "bg-teal-500 dark:bg-teal-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center gap-1 bg-blue-100 dark:bg-slate-700 px-2 py-1 text-sm rounded-md"
                  >
                    <span>{cat.name}</span>
                    <button
                      onClick={() =>
                        toggleCategory({ id: cat.id, name: cat.name })
                      }
                      className="text-red-600 font-bold text-lg rounded-md cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {clientError && <p className="text-sm text-red-400">{clientError}</p>}

          {/* Tags */}
          <div className="w-full md:w-2/3">
            <Label className="mb-2">Tags (optional!)</Label>
            <Input
              type="text"
              placeholder="Tags (comma separated)"
              onBlur={(e) =>
                setTags(
                  e.target.value
                    .split(",")
                    .map((name) => ({ name: name.trim() }))
                )
              }
            />
          </div>

          {/* Sections */}
          <div className="w-full md:w-2/3">
            <Label className="mb-3">Sections</Label>
            {sections.map((section, index) => (
              <div key={index} className="mb-4 border p-2 rounded-md">
                <Label className="my-4">Cover Image</Label>
                <Input
                  className="mb-4"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("Image uploaded:", file.name);
                      updateSection(index, { ...section, imageFile: file });
                    } else {
                      console.log("No image selected");
                      updateSection(index, { ...section, imageFile: null });
                    }
                  }}
                />

                <Separator className="my-3" />
                <Label className="my-4">Content</Label>
                <SimpleEditor
                  value={section.content}
                  onChange={(val) =>
                    updateSection(index, { ...section, content: val })
                  }
                />

                <Button
                  disabled={sections.length === 1} // min 1
                  onClick={() => removeSection(index)}
                  className="mt-2 px-2 py-1 bg-rose-500 text-white rounded-md disabled:opacity-50"
                  size={"sm"}
                >
                  <Icons.trash className="inline size-5 me-1" />
                  Remove Section
                </Button>
              </div>
            ))}
            {sections.length < 5 && (
              <Button
                onClick={addSection}
                className="px-3 py-1 text-white rounded-md"
                variant={"outline"}
                size={"sm"}
              >
                <Icons.layers className="inline size-5 me-1" />
                Add Section
              </Button>
            )}

            {/* {sections.map((section: Section, index: number) => (
          <div
            key={index}
            style={{ marginBottom: 16, border: "1px solid #ccc", padding: 8 }}
          >
            <SimpleEditor
              value={section.content}
              onChange={(val) =>
                updateSection(index, { ...section, content: val })
              }
              darkMode={darkMode}
            />
            <button onClick={() => removeSection(index)}>Remove Section</button>
          </div>
        ))}
        {sections.length < 5 && (
          <button onClick={addSection}>Add Section</button>
        )} */}
          </div>

          {isSubmitting ? (
            <>
              <Button disabled variant={"outline"} className="w-full">
                <Icons.gear className="animate-spin" /> Submitting...
              </Button>
            </>
          ) : (
            <>
              <Button type="submit" variant={"outline"} className="w-full">
                Submit
              </Button>
            </>
          )}
        </form>
      </Form>
      {/* Title */}
      {/* <Label>Title</Label>
      <Input
        className="md:w-1/2"
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}

      {/* Reset Form
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Clear Form
      </button> */}
    </section>
  );
};

export default CreateArticleForm;
