import { useRecoilState } from "recoil";

import { userState } from "shared/atoms/userState";

export default function useCurrentUser() {
  return useRecoilState(userState);
}
