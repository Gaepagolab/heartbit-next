import { MutableSnapshot } from "recoil";

import { isServer } from "shared/constants/env";
import storage from "shared/utils/storage";
import { userState } from "shared/atoms/userState";

export default function recoilInitializer({ set }: MutableSnapshot) {
  if (!isServer) {
    const user = storage.getItem("user");

    set(userState, user);
  }
}
