import { create } from "zustand";

export const useBotStore = create((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
}));

export const useEditBotPageStore = create((set) => ({
  visible: false,
  setVisible: (visible) => set(() => ({ visible })),
}));

export const useBots = create((set) => ({
  bots: [
    // {
    //   id: 1,
    //   botname: "Doctor assistant bot",
    //   description:
    //     "Provide doctor a smooth experience to manage their appointments",
    // },
  ],
  addBot: (bot) =>
    set((state) => ({
      bots: [...state.bots, { ...bot, id: state.bots?.length + 1 }],
    })),
}));
