import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: () =>
        set((state) => ({
          ...state,
          theme: get().theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
    }
  )
);

export const useTheme = () => useStore((state) => state.theme);
export const useSetTheme = () => useStore((state) => state.setTheme);
