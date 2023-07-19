import { selector } from "recoil";
import { loginmodalState } from "./atom";

export const loginModalSelect = selector({
  key: "loginModalSelect",
  get: ({ get }) => {
    const boolean = get(loginmodalState);
  },
});
