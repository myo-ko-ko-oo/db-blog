import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

export enum Status {
  otp = "otp",
  confirm = "confirm",
  verify = "verify",
  reset = "reset",
  none = "none",
}

type State = {
  email: string | null;
  token: string | null;
  status: Status;
};

const initialState: State = {
  email: null,
  token: null,
  status: Status.none,
};

type Actions = {
  setAuth: (email: string, token: string, status: Status) => void;
  clearAuth: () => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,

      setAuth: (email, token, status) =>
        set((state) => {
          state.email = email;
          state.token = token;
          state.status = status;
        }),

      clearAuth: () => set(initialState),
    })),
    {
      name: "auth-credentials", // key for sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
