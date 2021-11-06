import { atom } from "recoil";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
