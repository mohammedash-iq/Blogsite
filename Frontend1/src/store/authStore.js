import { create } from "zustand";


const localtoken = localStorage.getItem("jwt")

const useToken = create((set) => ({
  token: localtoken ? localtoken : "",
  setToken: (accesstoken) => set(() => ({ token: accesstoken }))
}));

export default useToken;