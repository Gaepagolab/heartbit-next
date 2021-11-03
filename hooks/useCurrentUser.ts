import { useRecoilState } from "recoil";

import { currentUserState } from "states/currentUserState";

export default function useCurrentUser() {
  return useRecoilState(currentUserState);
}
