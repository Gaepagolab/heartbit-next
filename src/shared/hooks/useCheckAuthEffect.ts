import { useEffect, useCallback } from "react";

import { me } from "../api/authenticate";
import useCurrentUser from "./useCurrentUser";

export default function useCheckAuthEffect() {
  const [_, userSet] = useCurrentUser();

  const checkCurrentUser = useCallback(async () => {
    try {
      const user = await me();
      userSet(user);
    } catch (err) {
      console.error(err);
      userSet(null);
    }
  }, [userSet]);

  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);
}
