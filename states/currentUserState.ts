import { atom } from "recoil";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const currentUserState = atom<User | undefined>({
  key: "currentUserState",
  default: null,
});
