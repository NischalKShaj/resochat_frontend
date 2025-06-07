// file to trigger the components globally

// importing the required modules
import { create } from "zustand";
import { TriggerType } from "@/types/types";

// creating the trigger store
export const useTriggerStore = create<TriggerType>((set) => ({
  trigger: "chats",
  setTrigger: (value) => set({ trigger: value }),
}));
