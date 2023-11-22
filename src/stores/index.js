import { create } from "zustand";

export const useBotStore = create((set) => ({
  name: "",
  setName: () => set((state) => ({ name: state.name })),
}));

export const useEditBotPageStore = create((set) => ({
  visible: false,
  setVisible: (visible) => set(() => ({ visible })),
}));

export const useBots = create();
