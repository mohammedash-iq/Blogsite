import { create } from "zustand";

const useToken = create((set) => ({
  token: "",
  setToken: (accesstoken) => set(() => ({ token: accesstoken })),
  setToken: () => set(() => ({ token: "" }))
}));

export default useToken;