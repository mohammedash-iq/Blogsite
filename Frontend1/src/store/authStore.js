import { create } from "zustand";

const useToken = create((set) => ({
  token: "",
  setToken: (accesstoken) => set({ token: accesstoken }),
  deleteToken: () => set({ token: "" }),
}));

export default useToken;