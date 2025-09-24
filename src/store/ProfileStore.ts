import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

type userData = {
  id: number;
  email: string;
  name: string;
  phone: string;
  role: string;
};
type State = {
  user: userData | null;
  role: string | null;
};

const initialState: State = {
  user: null,
  role: "ADMIN",
};

type Actions = {
  setUser: (data: userData | null) => void;
  clearProfile: () => void;
};

const useProfileStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,

      setUser: (data) =>
        set((state) => {
          state.user = data;
        }),

      clearProfile: () => set(initialState),
    })),
    {
      name: "profile", // key for sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useProfileStore;
