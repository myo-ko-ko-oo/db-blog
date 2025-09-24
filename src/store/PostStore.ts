import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

export type Section = {
  content: string;
  imageFile?: File | null;
};

export type PostState = {
  title: string;
  sections: Section[];
  categories: { id: number }[];
  tags: { name: string }[];

  setTitle: (title: string) => void;
  addSection: () => void;
  updateSection: (index: number, section: Section) => void;
  removeSection: (index: number) => void;
  setCategories: (categories: { id: number }[]) => void;
  setTags: (tags: { name: string }[]) => void;
  reset: () => void;
};
const initialState = {
  title: "",
  sections: [] as Section[],
  categories: [] as { id: number }[],
  tags: [] as { name: string }[],
};

export const usePostStore = create<PostState>()(
  persist(
    immer((set) => ({
      ...initialState,
      title: "",
      sections: [{ content: "", imageFile: null }], // start with 1
      categories: [],
      tags: [],

      setTitle: (title) =>
        set((state) => {
          state.title = title;
        }),

      addSection: () => {
        set((state) => {
          if (state.sections.length < 5) {
            state.sections.push({ content: "", imageFile: null });
          }
        });
      },

      updateSection: (index, section) =>
        set((state) => {
          if (state.sections[index]) {
            state.sections[index] = section;
          }
        }),

      removeSection: (index: number) => {
        set((state) => {
          if (state.sections.length > 1) {
            state.sections = state.sections.filter(
              (_, i: number) => i !== index
            );
          }
        });
      },

      // removeSection: (index: number) =>
      //   set((state) => {
      //     state.sections = state.sections.filter(
      //       (_: Section, i: number) => i !== index
      //     );
      //   }),

      setCategories: (categories) =>
        set((state) => {
          state.categories = categories;
        }),

      setTags: (tags) =>
        set((state) => {
          state.tags = tags;
        }),

      reset: () =>
        set(() => ({
          ...initialState,
        })),
    })),
    {
      name: "article", // key for sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default usePostStore;
